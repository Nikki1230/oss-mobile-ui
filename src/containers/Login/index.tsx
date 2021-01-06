import React, {PureComponent} from 'react';
import { requestIndex} from '../../api/home'
import { Button } from 'antd-mobile'

interface IProps{
    history: string;
}

export default class index extends PureComponent {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.requestIndex()

    }
    async requestIndex() {
        const res = await requestIndex()
        console.log(res)
    }
    handleJump() {
        // @ts-ignore
        this.props.history.push('./workbench')
    }

    render() {
        return (
            <div>
                <div >我是Login页面</div>
                <Button type="primary" inline size="small" onClick={this.handleJump.bind(this)}>点击登录</Button>
            </div>
        )
    }
}