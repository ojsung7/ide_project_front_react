import React from 'react'

const Sub_container = () => {
    return (
        <div className='sub_container'>
            <div className='explorer'>
                <div className='top'>
                    <img className='lang_icon' src="/icons/python.png" />
                    <div className='handle'>
                        <img src="/icons/plus.png" />
                        <img src="/icons/minus.png" />
                    </div>
                </div>
                <div className='files'>
                    <div className='file'>
                        <img src="/icons/next.png" /><img src="/icons/files.png" />
                        <p>test.py</p>
                    </div>
                    <div className='file'>
                        <img src="/icons/next.png" /><img src="/icons/files.png" />
                        <p>test.py</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sub_container