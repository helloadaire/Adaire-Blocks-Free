import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { 
    buttonText, 
    buttonLink, 
    openInNewTab, 
    blockId,
    // Styling attributes
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    buttonStyle,
    underlineColor,
    blurAmount,
    fontSize,
    showIcon,
    hoverAnimation,
    buttonPadding,
    buttonMargin,
    zIndex,
    borderRadius,
    fontWeight
  } = attributes;

  return (
    <div {...useBlockProps.save({ 
      className: 'ad-button-block',
      id: blockId || undefined,
      style: {
        '--button-color': buttonColor || '#ffffff',
        '--button-bg-color': buttonBackgroundColor || 'transparent',
        '--button-hover-color': buttonHoverColor || '#ffffff',
        '--button-hover-bg-color': buttonHoverBackgroundColor || 'transparent',
        '--button-underline-color': underlineColor || '#ff4242',
        '--button-blur': blurAmount ? `${blurAmount}px` : '0px',
        '--button-font-size': fontSize ? `${fontSize}px` : '1.1rem',
        '--button-padding-top': buttonPadding?.top || '10px',
        '--button-padding-right': buttonPadding?.right || '20px',
        '--button-padding-bottom': buttonPadding?.bottom || '10px',
        '--button-padding-left': buttonPadding?.left || '20px',
        '--button-margin-top': buttonMargin?.top || '20px',
        '--button-margin-right': buttonMargin?.right || '0px',
        '--button-margin-bottom': buttonMargin?.bottom || '20px',
        '--button-margin-left': buttonMargin?.left || '0px',
        '--button-z-index': zIndex || '1',
        '--button-border-radius': borderRadius ? `${borderRadius}px` : '0px',
        '--button-font-weight': fontWeight || '500',
      }
    })}>
      <a
        href={buttonLink}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        className={`ad-button-block__link ad-button-block__link--${buttonStyle || 'underline'} ad-button-block__link--${hoverAnimation || 'slide-underline'} test2`}
      >
        {buttonText}
        {showIcon !== false && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </a>
    </div>
  );
} 