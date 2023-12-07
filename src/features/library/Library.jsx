import Button from '../../components/shared/button/Button';
import BitCoinIcon from '../../assets/svg/bitcoin.svg?react';

const Library = () => {
    return (
        <div className='p-16  space-y-7'>
            
            
            <Button className='btn-primary ' />
            <Button className='btn-primary' StartIcon={BitCoinIcon} />
            <Button className='btn-secondary' />
            <Button className='btn-secondary ' StartIcon={BitCoinIcon} />
            

            
            
        </div>
    );
};

export default Library;