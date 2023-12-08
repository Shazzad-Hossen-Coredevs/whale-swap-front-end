import Button from '../../components/shared/button/Button';
// import BitCoinIcon from '../../assets/svg/bitcoin.svg?react';
import { useGlobalCtx } from '../../Contexts/GlobalProvider'
import TestModal from '../modal/TestModal';

const Library = () => {
    const { openModal, closeModal, modals } = useGlobalCtx();

    console.log('modal ', modals)
    return (
        <div className='p-16  space-y-7'>


            {/* <Button className='btn-primary ' />
            <Button className='btn-primary' StartIcon={BitCoinIcon} />
            <Button className='btn-secondary' />
            <Button className='btn-secondary ' StartIcon={BitCoinIcon} /> */}

            <Button className='btn-secondary' text='Open Modal' onClick={() => openModal('testopen', <TestModal />)} />
            <Button className='btn-secondary' text='Close Modal' onClick={() => closeModal('testopen')} />

            <TestModal />


        </div>
    );
};

export default Library;