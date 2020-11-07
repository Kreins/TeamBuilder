import {Row, Col, Slider, Button, Skeleton, Switch, Card, Avatar} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const {Meta} = Card;

const gutters = {};
const vgutters = {};
const colCounts = {};


[8, 16, 24, 32, 40, 48].forEach((value, i) => {
    gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
    vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
    colCounts[i] = value;
});

export class AdminGrid extends React.Component {
    state = {
        gutterKey: 1,
        vgutterKey: 1,
        colCountKey: 2,
    };

    onGutterChange = gutterKey => {
        this.setState({gutterKey});
    };

    onVGutterChange = vgutterKey => {
        this.setState({vgutterKey});
    };

    onColCountChange = colCountKey => {
        this.setState({colCountKey});
    };

    render() {
        const {gutterKey, vgutterKey, colCountKey} = this.state;
        const cols = [];
        const colCount = colCounts[colCountKey];
        let colCode = '';
        for (let i = 0; i < colCount; i++) {
            cols.push(
                // <Col key={i.toString()} span={24 / colCount}>
                //   <Button className="course-tab">Course</Button>
                // </Col>,
                <Card
                    style={{width: 300, marginTop: 16}}
                    actions={[
                        <SettingOutlined key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    <Skeleton loading={false} avatar active>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            );
            colCode += `  <Col span={${24 / colCount}} />\n`;
        }
        return (
            <>
                <span>Horizontal Gutter (px): </span>
                <div style={{width: '50%'}}>
                    <Slider
                        min={0}
                        max={Object.keys(gutters).length - 1}
                        value={gutterKey}
                        onChange={this.onGutterChange}
                        marks={gutters}
                        step={null}
                        tipFormatter={value => gutters[value]}
                    />
                </div>
                <span>Vertical Gutter (px): </span>
                <div style={{width: '50%'}}>
                    <Slider
                        min={0}
                        max={Object.keys(vgutters).length - 1}
                        value={vgutterKey}
                        onChange={this.onVGutterChange}
                        marks={vgutters}
                        step={null}
                        tipFormatter={value => vgutters[value]}
                    />
                </div>
                <span>Column Count:</span>
                <div style={{width: '50%', marginBottom: 48}}>
                    <Slider
                        min={0}
                        max={Object.keys(colCounts).length - 1}
                        value={colCountKey}
                        onChange={this.onColCountChange}
                        marks={colCounts}
                        step={null}
                        tipFormatter={value => colCounts[value]}
                    />
                </div>

                <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
                <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>

            </>
        );
    }
}