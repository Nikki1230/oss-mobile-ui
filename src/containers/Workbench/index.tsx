import React, {PureComponent} from 'react';
import Layout from '../../layout/layout'
import './index.less';

export default class Find extends PureComponent<any,any> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            index: "我是workbench页面"
        };
    }
    render() {
        return (
            <Layout>
                <div className='wrapper'>{this.state.index}</div>
            </Layout>
        )
    }
}