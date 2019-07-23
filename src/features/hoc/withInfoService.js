import React from 'react';
import InfoServiceContext from '../coffeeServiceContext';


const WithInfoService = () => (Wrapped) => {
    return (props) => {
        return (
            <InfoServiceContext.Consumer>
                {
                    (InfoService) => {
                        return <Wrapped {...props} InfoService={InfoService}/>
                    }
                }
            </InfoServiceContext.Consumer>
        )
    }
};
export default WithInfoService;