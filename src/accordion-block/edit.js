import { __ } from '@wordpress/i18n';
import { useCallback, useState } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, ColorPalette, Button, ButtonGroup, TextControl } from '@wordpress/components';
import { desktop, tablet, mobile } from '@wordpress/icons';
import UpgradeNotice from '../components/UpgradeNotice';

const EASINGS = [ 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out' ];

// Get limit from PHP (server-side validation)
const FREE_TIER_ITEM_LIMIT = window.adaireBlockLimits?.['accordion-block']?.limit || 3;

export default function Edit( { attributes, setAttributes, clientId } ) {
    const [deviceType, setDeviceType] = useState('desktop');
    
    const {
        blockId,
        items,
        titleColor,
        contentColor,
        backgroundColor,
        chevronColor,
        titleFontSize,
        contentFontSize,
        gap,
        radius,
        padding,
        animationDuration,
        animationEasing,
        allowMultipleOpen,
        icon,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginHorizontal,
        titleFontWeight,
        contentFontWeight,
        shadowIntensity,
        contentBackgroundColor,
        dividerColor,
        dividerThickness,
        containerMode,
        containerMaxWidth,
    } = attributes;

    if ( !blockId ) {
        setAttributes( { blockId: clientId } );
    }

    const blockProps = useBlockProps( {
        className: 'adaire-accordion',
        style: {
            '--acc-title-color': titleColor,
            '--acc-content-color': contentColor,
            '--acc-bg': backgroundColor,
            '--acc-chevron': chevronColor,
            '--acc-title-size': `${ titleFontSize }px`,
            '--acc-content-size': `${ contentFontSize }px`,
            '--acc-gap': `${ gap }px`,
            '--acc-radius': `${ radius }px`,
            '--acc-padding': `${ padding }px`,
            '--acc-duration': `${ animationDuration }ms`,
            '--acc-easing': animationEasing,
            '--acc-margin-top': `${ marginTop }px`,
            '--acc-margin-right': `${ marginHorizontal?.desktop ?? marginRight }px`,
            '--acc-margin-bottom': `${ marginBottom }px`,
            '--acc-margin-left': `${ marginHorizontal?.desktop ?? marginLeft }px`,
            '--acc-margin-h-desktop': `${ marginHorizontal?.desktop ?? 0 }px`,
            '--acc-margin-h-tablet': `${ marginHorizontal?.tablet ?? 0 }px`,
            '--acc-margin-h-mobile': `${ marginHorizontal?.mobile ?? 0 }px`,
            '--acc-title-weight': titleFontWeight,
            '--acc-content-weight': contentFontWeight,
            '--acc-shadow-intensity': shadowIntensity,
            '--acc-shadow-alpha': shadowIntensity,
            '--acc-shadow-alpha-hover': (typeof shadowIntensity === 'number' ? shadowIntensity * 0.5 : 0.04),
            '--acc-shadow-alpha-base': (typeof shadowIntensity === 'number' ? shadowIntensity * 0.25 : 0.02),
            // Ensure margins render in editor regardless of theme CSS
            marginTop: `${ marginTop }px`,
            marginRight: `${ marginHorizontal?.desktop ?? marginRight }px`,
            marginBottom: `${ marginBottom }px`,
            marginLeft: `${ marginHorizontal?.desktop ?? marginLeft }px`,
            '--acc-content-bg': contentBackgroundColor,
            '--acc-divider-color': dividerColor,
            '--acc-divider-thickness': `${dividerThickness}px`,
            '--acc-container-mode': containerMode || 'full',
            '--acc-container-max-width': `${ containerMaxWidth?.desktop?.value ?? containerMaxWidth?.value ?? 1200 }${ containerMaxWidth?.desktop?.unit ?? containerMaxWidth?.unit ?? 'px' }`,
            '--acc-container-max-width-tablet': `${ containerMaxWidth?.tablet?.value ?? 100 }${ containerMaxWidth?.tablet?.unit ?? '%' }`,
            '--acc-container-max-width-mobile': `${ containerMaxWidth?.mobile?.value ?? 100 }${ containerMaxWidth?.mobile?.unit ?? '%' }`,
        },
    } );

    const updateItem = useCallback( ( index, patch ) => {
        const next = [ ...items ];
        next[ index ] = { ...next[ index ], ...patch };
        setAttributes( { items: next } );
    }, [ items, setAttributes ] );

    const addItem = () => {
        if (items.length >= FREE_TIER_ITEM_LIMIT) {
            return; // Don't add if limit reached
        }
        setAttributes( { items: [ ...items, { title: __('New Item', 'accordion-block'), content: __('Add content...', 'accordion-block'), open: false } ] } );
    };

    const removeItem = ( index ) => {
        const next = items.filter( ( _, i ) => i !== index );
        setAttributes( { items: next } );
    };

    const toggleItem = ( index ) => {
        const next = items.map( ( it, i ) => {
            if ( i === index ) {
                return { ...it, open: !it.open };
            }
            return allowMultipleOpen ? it : { ...it, open: false };
        } );
        setAttributes( { items: next } );
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __('Container Settings', 'accordion-block') } initialOpen={ true }>
                    <ButtonGroup>
                        { [
                            { label: __('Full width', 'accordion-block'), value: 'full' },
                            { label: __('Constrained', 'accordion-block'), value: 'constrained' },
                        ].map(opt => (
                            <Button
                                key={ opt.value }
                                isPrimary={ containerMode === opt.value }
                                isSecondary={ containerMode !== opt.value }
                                onClick={ () => setAttributes({ containerMode: opt.value }) }
                            >{ opt.label }</Button>
                        )) }
                    </ButtonGroup>
                    { containerMode === 'constrained' && (
                        <>
                            <p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600 }}>
                                { __('Max Width', 'accordion-block') }
                            </p>
                            <ButtonGroup style={{ marginBottom: '12px' }}>
                                <Button
                                    icon={desktop}
                                    isPrimary={deviceType === 'desktop'}
                                    onClick={() => setDeviceType('desktop')}
                                    label={__('Desktop', 'accordion-block')}
                                />
                                <Button
                                    icon={tablet}
                                    isPrimary={deviceType === 'tablet'}
                                    onClick={() => setDeviceType('tablet')}
                                    label={__('Tablet', 'accordion-block')}
                                />
                                <Button
                                    icon={mobile}
                                    isPrimary={deviceType === 'mobile'}
                                    onClick={() => setDeviceType('mobile')}
                                    label={__('Mobile', 'accordion-block')}
                                />
                            </ButtonGroup>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <TextControl
                                    type="number"
                                    value={
                                        containerMaxWidth?.[deviceType]?.value ?? 
                                        (deviceType === 'desktop' ? (containerMaxWidth?.value ?? 1200) : 100)
                                    }
                                    onChange={(v) =>
                                        setAttributes({
                                            containerMaxWidth: {
                                                ...(containerMaxWidth || {}),
                                                [deviceType]: {
                                                    ...(containerMaxWidth?.[deviceType] || {}),
                                                    value: Number(v),
                                                },
                                            },
                                        })
                                    }
                                />
                                <ButtonGroup>
                                    { ['px','%','rem','vw'].map(u => (
                                        <Button
                                            key={u}
                                            isPrimary={
                                                (containerMaxWidth?.[deviceType]?.unit ??
                                                    (deviceType === 'desktop' ? (containerMaxWidth?.unit ?? 'px') : '%')) === u
                                            }
                                            isSecondary={
                                                (containerMaxWidth?.[deviceType]?.unit ??
                                                    (deviceType === 'desktop' ? (containerMaxWidth?.unit ?? 'px') : '%')) !== u
                                            }
                                            onClick={() =>
                                                setAttributes({
                                                    containerMaxWidth: {
                                                        ...(containerMaxWidth || {}),
                                                        [deviceType]: {
                                                            ...(containerMaxWidth?.[deviceType] || {}),
                                                            unit: u,
                                                        },
                                                    },
                                                })
                                            }
                                        >{u}</Button>
                                    )) }
                                </ButtonGroup>
                            </div>
                        </>
                    )}
                </PanelBody>
                <PanelBody title={ __('Items', 'accordion-block') } initialOpen={ true }>
                    <Button 
                        isPrimary 
                        onClick={ addItem }
                        disabled={ items.length >= FREE_TIER_ITEM_LIMIT }
                    >
                        { __('Add Item', 'accordion-block') }
                    </Button>
                    { items.length >= FREE_TIER_ITEM_LIMIT && (
                        <UpgradeNotice itemType="item" />
                    ) }
                    <RangeControl
                        label={ __('Gap', 'accordion-block') }
                        value={ gap }
                        onChange={ (v) => setAttributes( { gap: v } ) }
                        min={ 0 }
                        max={ 48 }
                    />
                    <RangeControl
                        label={ __('Padding', 'accordion-block') }
                        value={ padding }
                        onChange={ (v) => setAttributes( { padding: v } ) }
                        min={ 0 }
                        max={ 48 }
                    />
                    <RangeControl
                        label={ __('Radius', 'accordion-block') }
                        value={ radius }
                        onChange={ (v) => setAttributes( { radius: v } ) }
                        min={ 0 }
                        max={ 48 }
                    />
                    <ToggleControl
                        label={ __('Allow multiple open', 'accordion-block') }
                        checked={ allowMultipleOpen }
                        onChange={ (v) => setAttributes( { allowMultipleOpen: v } ) }
                    />
                </PanelBody>
                <PanelBody title={ __('Typography', 'accordion-block') } initialOpen={ false }>
                    <RangeControl
                        label={ __('Title size', 'accordion-block') }
                        value={ titleFontSize }
                        onChange={ (v) => setAttributes( { titleFontSize: v } ) }
                        min={ 10 }
                        max={ 60 }
                    />
                    <RangeControl
                        label={ __('Content size', 'accordion-block') }
                        value={ contentFontSize }
                        onChange={ (v) => setAttributes( { contentFontSize: v } ) }
                        min={ 10 }
                        max={ 48 }
                    />
                    <p>{ __('Title weight', 'accordion-block') }</p>
                    <ButtonGroup>
                        { ['300', '400', '500', '600', '700', '800'].map( (weight) => (
                            <Button
                                key={ weight }
                                isPrimary={ titleFontWeight === weight }
                                isSecondary={ titleFontWeight !== weight }
                                onClick={ () => setAttributes( { titleFontWeight: weight } ) }
                            >{ weight }</Button>
                        ) ) }
                    </ButtonGroup>
                    <p>{ __('Content weight', 'accordion-block') }</p>
                    <ButtonGroup>
                        { ['300', '400', '500', '600', '700', "800"].map( (weight) => (
                            <Button
                                key={ weight }
                                isPrimary={ contentFontWeight === weight }
                                isSecondary={ contentFontWeight !== weight }
                                onClick={ () => setAttributes( { contentFontWeight: weight } ) }
                            >{ weight }</Button>
                        ) ) }
                    </ButtonGroup>
                </PanelBody>
                <PanelBody title={ __('Colors', 'accordion-block') } initialOpen={ false }>
                    <p>{ __('Title', 'accordion-block') }</p>
                    <ColorPalette value={ titleColor } onChange={ (v)=> setAttributes({ titleColor: v }) } />
                    <p>{ __('Content', 'accordion-block') }</p>
                    <ColorPalette value={ contentColor } onChange={ (v)=> setAttributes({ contentColor: v }) } />
                    <p>{ __('Background', 'accordion-block') }</p>
                    <ColorPalette value={ backgroundColor } onChange={ (v)=> setAttributes({ backgroundColor: v }) } />
                    <p>{ __('Chevron', 'accordion-block') }</p>
                    <ColorPalette value={ chevronColor } onChange={ (v)=> setAttributes({ chevronColor: v }) } />
                    <p>{ __('Content Background', 'accordion-block') }</p>
                    <ColorPalette value={ contentBackgroundColor } onChange={ (v)=> setAttributes({ contentBackgroundColor: v }) } />
                    <p>{ __('Divider Line Color', 'accordion-block') }</p>
                    <ColorPalette value={ dividerColor } onChange={ (v)=> setAttributes({ dividerColor: v }) } />
                    <RangeControl
                        label={ __('Divider Line Thickness (px)', 'accordion-block') }
                        value={ dividerThickness }
                        onChange={ (v) => setAttributes( { dividerThickness: v } ) }
                        min={ 0 }
                        max={ 10 }
                        step={ 1 }
                    />
                </PanelBody>
                <PanelBody title={ __('Spacing & Margins', 'accordion-block') } initialOpen={ false }>
                    <RangeControl
                        label={ __('Margin Top', 'accordion-block') }
                        value={ marginTop }
                        onChange={ (v) => setAttributes( { marginTop: v } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __('Horizontal Margin (Desktop)', 'accordion-block') }
                        value={ marginHorizontal?.desktop ?? 0 }
                        onChange={ (v) => setAttributes( { marginHorizontal: { ...marginHorizontal, desktop: v } } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __('Margin Bottom', 'accordion-block') }
                        value={ marginBottom }
                        onChange={ (v) => setAttributes( { marginBottom: v } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __('Horizontal Margin (Tablet)', 'accordion-block') }
                        value={ marginHorizontal?.tablet ?? 0 }
                        onChange={ (v) => setAttributes( { marginHorizontal: { ...marginHorizontal, tablet: v } } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <RangeControl
                        label={ __('Horizontal Margin (Mobile)', 'accordion-block') }
                        value={ marginHorizontal?.mobile ?? 0 }
                        onChange={ (v) => setAttributes( { marginHorizontal: { ...marginHorizontal, mobile: v } } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                </PanelBody>
                <PanelBody title={ __('Effects', 'accordion-block') } initialOpen={ false }>
                    <RangeControl
                        label={ __('Shadow Intensity', 'accordion-block') }
                        value={ shadowIntensity }
                        onChange={ (v) => setAttributes( { shadowIntensity: v } ) }
                        min={ 0 }
                        max={ 0.5 }
                        step={ 0.01 }
                    />
                </PanelBody>
                <PanelBody title={ __('Animation', 'accordion-block') } initialOpen={ false }>
                    <RangeControl
                        label={ __('Duration (ms)', 'accordion-block') }
                        value={ animationDuration }
                        onChange={ (v) => setAttributes( { animationDuration: v } ) }
                        min={ 100 }
                        max={ 1500 }
                        step={ 50 }
                    />
                    <p>{ __('Easing', 'accordion-block') }</p>
                    <ButtonGroup>
                        { EASINGS.map( (e) => (
                            <Button
                                key={ e }
                                isPrimary={ animationEasing === e }
                                isSecondary={ animationEasing !== e }
                                onClick={ () => setAttributes( { animationEasing: e } ) }
                            >{ e }</Button>
                        ) ) }
                    </ButtonGroup>
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps } data-allow-multiple={ allowMultipleOpen }>
                <div className="adaire-accordion__container">
                    <div className="adaire-accordion__list">
                    { items.map( ( item, index ) => (
                        <div key={ index } className={ `adaire-accordion__item${ item.open ? ' is-open' : '' }` }>
                            <button type="button" className="adaire-accordion__header" onClick={ () => toggleItem( index ) }>
                                <RichText
                                    tagName="span"
                                    className="adaire-accordion__title"
                                    value={ item.title }
                                    onChange={ (v)=> updateItem( index, { title: v } ) }
                                    placeholder={ __('Title…', 'accordion-block') }
                                    allowedFormats={ ['core/bold', 'core/italic', 'core/strikethrough'] }
                                />
                                <span className="adaire-accordion__chevron" aria-hidden="true">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            <div className="adaire-accordion__panel">
                                <RichText
                                    tagName="div"
                                    className="adaire-accordion__content"
                                    value={ item.content }
                                    onChange={ (v)=> updateItem( index, { content: v } ) }
                                    placeholder={ __('Content…', 'accordion-block') }
                                    allowedFormats={ ['core/bold', 'core/italic', 'core/strikethrough', 'core/link'] }
                                />
                            </div>
                            <div className="adaire-accordion__item-actions">
                                <Button isDestructive onClick={ ()=> removeItem(index) }>{ __('Remove', 'accordion-block') }</Button>
                            </div>
                        </div>
                    ) ) }
                    </div>
                </div>
            </div>
        </>
    );
}


