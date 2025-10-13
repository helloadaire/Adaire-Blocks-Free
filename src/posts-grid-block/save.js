import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        postsPerPage,
        enablePagination,
        paginationStyle,
        selectedCategories,
        selectedPosts,
        postType,
        excludeCurrentPost,
        showCategories,
        showDate,
        showAuthor,
        showReadTime,
        showExcerpt,
        excerptLength,
        layoutType,
        columns,
        enableFiltering,
        filterPosition,
        filterStyle,
        cardBorderRadius,
        cardPadding,
        cardGap,
        imageHeight,
        imageFit,
        titleColor,
        titleFontSize,
        titleFontWeight,
        excerptColor,
        excerptFontSize,
        excerptFontWeight,
        metaColor,
        metaFontSize,
        metaFontWeight,
        categoryColor,
        categoryBackgroundColor,
        categoryBorderRadius,
        filterBorderRadius,
        paginationBorderRadius,
        enableAnimations,
        animationType,
        transitionAnimation,
        animationDuration,
        animationDelay,
        animationEase,
        enableHoverEffects,
        hoverScale,
        hoverShadow,
        overlayOpacity,
        overlayGradient,
        textAlign,
        containerMode,
        containerMaxWidth,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `adaire-posts-grid adaire-posts-grid--${layoutType}`,
        'data-block-id': blockId,
        'data-posts-per-page': postsPerPage,
        'data-enable-pagination': enablePagination,
        'data-pagination-style': paginationStyle,
        'data-selected-categories': JSON.stringify(selectedCategories),
        'data-selected-posts': JSON.stringify(selectedPosts),
        'data-post-type': postType,
        'data-exclude-current-post': excludeCurrentPost,
        'data-show-categories': showCategories,
        'data-show-date': showDate,
        'data-show-author': showAuthor,
        'data-show-read-time': showReadTime,
        'data-show-excerpt': showExcerpt,
        'data-excerpt-length': excerptLength,
        'data-layout-type': layoutType,
        'data-columns': columns,
        'data-enable-filtering': enableFiltering,
        'data-filter-position': filterPosition,
        'data-filter-style': filterStyle,
        'data-card-border-radius': cardBorderRadius,
        'data-card-padding': cardPadding,
        'data-card-gap': cardGap,
        'data-image-height': imageHeight,
        'data-image-fit': imageFit,
        'data-title-color': titleColor,
        'data-title-font-size': titleFontSize,
        'data-title-font-weight': titleFontWeight,
        'data-excerpt-color': excerptColor,
        'data-excerpt-font-size': excerptFontSize,
        'data-excerpt-font-weight': excerptFontWeight,
        'data-meta-color': metaColor,
        'data-meta-font-size': metaFontSize,
        'data-meta-font-weight': metaFontWeight,
        'data-category-color': categoryColor,
        'data-category-background-color': categoryBackgroundColor,
        'data-category-border-radius': categoryBorderRadius,
        'data-enable-animations': enableAnimations,
        'data-animation-type': animationType,
        'data-transition-animation': transitionAnimation,
        'data-animation-duration': animationDuration,
        'data-animation-delay': animationDelay,
        'data-animation-ease': animationEase,
        'data-enable-hover-effects': enableHoverEffects,
        'data-hover-scale': hoverScale,
        'data-hover-shadow': hoverShadow,
        'data-overlay-opacity': overlayOpacity,
        'data-overlay-gradient': overlayGradient,
        'data-text-align': textAlign,
        'data-container-mode': containerMode,
        'data-container-max-width': JSON.stringify(containerMaxWidth),
        'data-margin-top': JSON.stringify(marginTop),
        'data-margin-right': JSON.stringify(marginRight),
        'data-margin-bottom': JSON.stringify(marginBottom),
        'data-margin-left': JSON.stringify(marginLeft),
        'data-container-width': JSON.stringify(containerMaxWidth),
        style: {
            '--adaire-posts-grid-columns': `${columns}`,
            '--adaire-posts-grid-gap': `${cardGap}px`,
            '--adaire-posts-grid-border-radius': `${cardBorderRadius}px`,
            '--adaire-posts-grid-padding': `${cardPadding}px`,
            '--adaire-posts-grid-image-height': `${imageHeight}px`,
            '--adaire-posts-grid-title-color': titleColor,
            '--adaire-posts-grid-title-font-size': `${titleFontSize}px`,
            '--adaire-posts-grid-title-font-weight': titleFontWeight,
            '--adaire-posts-grid-excerpt-color': excerptColor,
            '--adaire-posts-grid-excerpt-font-size': `${excerptFontSize}px`,
            '--adaire-posts-grid-excerpt-font-weight': excerptFontWeight,
            '--adaire-posts-grid-meta-color': metaColor,
            '--adaire-posts-grid-meta-font-size': `${metaFontSize}px`,
            '--adaire-posts-grid-meta-font-weight': metaFontWeight,
            '--adaire-posts-grid-category-color': categoryColor,
            '--adaire-posts-grid-category-background': categoryBackgroundColor,
            '--adaire-posts-grid-category-border-radius': `${categoryBorderRadius}px`,
            '--adaire-posts-grid-filter-border-radius': `${filterBorderRadius}px`,
            '--adaire-posts-grid-pagination-border-radius': `${paginationBorderRadius}px`,
            '--adaire-posts-grid-hover-scale': `${hoverScale}`,
            '--adaire-posts-grid-overlay-opacity': `${overlayOpacity}`,
            '--adaire-posts-grid-overlay-gradient': overlayGradient,
            '--container-max-width': `${containerMaxWidth?.desktop?.value ?? containerMaxWidth?.value ?? 1200}${containerMaxWidth?.desktop?.unit ?? containerMaxWidth?.unit ?? 'px'}`,
            '--container-max-width-tablet': `${containerMaxWidth?.tablet?.value ?? 100}${containerMaxWidth?.tablet?.unit ?? '%'}`,
            '--container-max-width-mobile': `${containerMaxWidth?.mobile?.value ?? 100}${containerMaxWidth?.mobile?.unit ?? '%'}`,
            marginTop: `${marginTop?.desktop ?? marginTop ?? 0}px`,
            marginRight: `${marginRight?.desktop ?? marginRight ?? 0}px`,
            marginBottom: `${marginBottom?.desktop ?? marginBottom ?? 0}px`,
            marginLeft: `${marginLeft?.desktop ?? marginLeft ?? 0}px`,
            '--margin-top-tablet': `${marginTop?.tablet ?? marginTop?.desktop ?? marginTop ?? 0}px`,
            '--margin-right-tablet': `${marginRight?.tablet ?? marginRight?.desktop ?? marginRight ?? 0}px`,
            '--margin-bottom-tablet': `${marginBottom?.tablet ?? marginBottom?.desktop ?? marginBottom ?? 0}px`,
            '--margin-left-tablet': `${marginLeft?.tablet ?? marginLeft?.desktop ?? marginLeft ?? 0}px`,
            '--margin-top-mobile': `${marginTop?.mobile ?? marginTop?.desktop ?? marginTop ?? 0}px`,
            '--margin-right-mobile': `${marginRight?.mobile ?? marginRight?.desktop ?? marginRight ?? 0}px`,
            '--margin-bottom-mobile': `${marginBottom?.mobile ?? marginBottom?.desktop ?? marginBottom ?? 0}px`,
            '--margin-left-mobile': `${marginLeft?.mobile ?? marginLeft?.desktop ?? marginLeft ?? 0}px`,
            textAlign: textAlign
        }
    });

    return (
        <div {...blockProps}>
            <div className={`adaire-posts-grid__container ${containerMode === 'constrained' ? 'is-constrained' : ''}`}>
                {enableFiltering && filterPosition === 'top' && (
                    <div className="adaire-posts-grid__filters">
                        <div className="adaire-posts-grid__filter-list">
                            {/* Filter buttons will be populated by JavaScript */}
                        </div>
                    </div>
                )}
                <div className="adaire-posts-grid__grid">
                    {/* Posts will be populated by JavaScript */}
                </div>
                {enableFiltering && filterPosition === 'bottom' && (
                    <div className="adaire-posts-grid__filters">
                        <div className="adaire-posts-grid__filter-list">
                            {/* Filter buttons will be populated by JavaScript */}
                        </div>
                    </div>
                )}
                {enablePagination && (
                    <div className="adaire-posts-grid__pagination ">
                        {/* Pagination will be populated by JavaScript */}
                    </div>
                )}
            </div>
        </div>
    );
}
