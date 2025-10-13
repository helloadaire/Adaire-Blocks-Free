import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const {
    question1Title, question1Content,
    question2Title, question2Content,
    question3Title, question3Content,
    backgroundColor, textColor, titleColor, inactiveTitleColor,
    blockId
  } = attributes;

  return (
    <section
      {...useBlockProps.save({ 
        style: { 
          backgroundColor: backgroundColor || '#25232c',
          '--title-color': titleColor || '#ffffff',
          '--inactive-title-color': inactiveTitleColor || '#666666'
        },
        id: blockId || undefined
      })}
      className="animated-section"
    >
      <div className="section-container">
        {/* Left side - Titles */}
        <div className="titles-column">
          <div className="title-item">
            <span className="section-number">01</span>
            <RichText.Content
              tagName="h2"
              value={question1Title}
            />
          </div>
          <div className="title-item">
            <span className="section-number">02</span>
            <RichText.Content
              tagName="h2"
              value={question2Title}
            />
          </div>
          <div className="title-item">
            <span className="section-number">03</span>
            <RichText.Content
              tagName="h2"
              value={question3Title}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="content-column">
          <div className="content-item" data-section="what">
            <RichText.Content
              tagName="div"
              value={question1Content}
              style={{ color: textColor || undefined }}
            />
          </div>
          <div className="content-item" data-section="why">
            <RichText.Content
              tagName="div"
              value={question2Content}
              style={{ color: textColor || undefined }}
            />
          </div>
          <div className="content-item" data-section="who">
            <RichText.Content
              tagName="div"
              value={question3Content}
              style={{ color: textColor || undefined }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 