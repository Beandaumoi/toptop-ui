//Để có thể có đặt class có "-"
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    //Thẻ cha thì nên đặt là wrapper
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}></div>
        </header>
    );
}

export default Header;
