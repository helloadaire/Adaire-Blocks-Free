import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
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

    const blockProps = useBlockProps.save( {
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
            // Ensure margins render on frontend regardless of theme CSS
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
        'data-allow-multiple': allowMultipleOpen ? 'true' : 'false',
        'data-block-id': blockId,
    } );

    return (
        <div { ...blockProps }>

            <div className="adaire-accordion__container test">
                <div className="adaire-accordion__list">
                { items.map( ( item, index ) => (
                    <div
                        key={ index }
                        className={ `adaire-accordion__item${ item.open ? ' is-open' : '' }` }
                        style={{ boxShadow: `0 1px 4px rgba(0,0,0,${shadowIntensity ?? 0.08})` }}
                    >
                        <button type="button" className="adaire-accordion__header" aria-expanded={ item.open ? 'true' : 'false' }>
                            <RichText.Content tagName="span" className="adaire-accordion__title" value={ item.title } />
                            <span className="adaire-accordion__chevron" aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                        <div className="adaire-accordion__panel">
                            <RichText.Content tagName="div" className="adaire-accordion__content" value={ item.content } />
                        </div>
                    </div>
                ) ) }
                </div>
            </div>
        </div>
    );
}


