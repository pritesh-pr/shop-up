import React from 'react';

import SHOP_DATA from './shop.data.js.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        console.log(collections);
        return (
            <div>
                <div>Shop Page</div>
                {
                    collections.map( ({id, ...otherCollectionProps}) => {
                       return <CollectionPreview key={id} {...otherCollectionProps} />
                    } )
                }
            </div>
        )
    }
}   

export default ShopPage;