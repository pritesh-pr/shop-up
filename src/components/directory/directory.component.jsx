import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections : [
                {
                    title : 'HATS',
                    id : 1,
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1884/8161/products/hat-patch_2000x.jpg?v=1565905362',
                    size: '',
                    pageUrl: 'hats'
                },
                {
                    title: 'JACKETS',
                    id: 2,
                    imageUrl: 'https://lp.arket.com/app006prod?set=key%5Bresolve.pixelRatio%5D,value%5B2%5D&set=key%5Bresolve.width%5D,value%5B450%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B80%5D&set=ImageVersion%5B201908090205%5D,source%5B01_0596182_002_3%5D,type%5BECOMLOOK%5D&call=url%5Bfile:/product/dynamic.chain%5D',
                    size: '',
                    pageUrl: ''
                },
                {
                    title: 'SNEAKERS',
                    id: 3,
                    imageUrl: 'https://media.dollskill.com/media/yMrQtadlqmIxcpaBKzhRZHlMNTOiM4yL-34.jpg',
                    pageUrl: ''
                },
                {
                    title: 'WOMEN',
                    id: 4,
                    imageUrl: 'https://thoughtcatalog.files.wordpress.com/2014/07/screen-shot-2014-07-17-at-5-12-54-pm.png?w=786',
                    size: 'large',
                    pageUrl: ''
                },
                {
                    title: 'MEN',
                    id: 5,
                    imageUrl: 'https://www.firetrap.com/images/marketing/firetrap-mens-jackets-aw17.jpg',
                    size: 'large',
                    pageUrl: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className = 'directory-menu'> 
                {this.state.sections.map(({ id, ...otherSections}) => (
                    <MenuItem key={id} {...otherSections} />
                ))}
            </div>
        )
    }
}

export default Directory;