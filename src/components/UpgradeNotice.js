import { __ } from '@wordpress/i18n';
import './UpgradeNotice.scss';

const UpgradeNotice = ({ itemType = 'item' }) => {
    return (
        <div className="adaire-upgrade-notice">
            <div className="adaire-upgrade-notice__content">
                <span className="adaire-upgrade-notice__icon"></span>
                <span className="adaire-upgrade-notice__text">
                    {__(`Go pro to add more ${itemType}s`, 'adaire-blocks')}
                </span>
                <a 
                    href="https://adaire.digital/adaire-blocks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="adaire-upgrade-notice__link"
                >
                    {__('Upgrade Now', 'adaire-blocks')}
                </a>
            </div>
        </div>
    );
};

export default UpgradeNotice;

