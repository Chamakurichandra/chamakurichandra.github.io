import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Modal, Input, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { confirm } = Modal;
export default function AddToList() {
    const [values, setValues] = useState({position:"",companyName:"",join:"",end:"",description:""});
    const [list, setList] = useState([]);
    const showDeleteConfirm = (i) => {
        confirm({
            title: 'Are you sure delete this list?',
            icon: <ExclamationCircleOutlined />,
            okText: 'confirm',
            okType: 'danger',
            cancelText: 'cancel',
            onOk() {
                let allItem = [...list];
                allItem.splice(i, 1)
                setList(allItem);
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };



    const onChange = (date, dateString, datePick) => {
        console.log(date, dateString);
        if (datePick) {
            setValues(pre => ({ ...pre, join: dateString }))
        } else {
            setValues(pre => ({ ...pre, end: dateString }))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (values.id) {
            let allList = list;
            let info = allList.findIndex((item) => item.id === values.id);
            console.log(info);
            allList[info] = values;
            setList([...allList])
            setValues({});
        } else {
            if (values.hasOwnProperty("position") && values.hasOwnProperty("companyName") && values.hasOwnProperty("join") && values.hasOwnProperty("end") && values.hasOwnProperty("description")) {
                values.id = list.length + 1;
                setList(pre => [values, ...pre]);
                setValues({});
                console.log(values);

            }
        }
    }
    return (
        <div className='p-3'>
            <form onSubmit={handleSubmit}>
                <div className='my-2'>
                    <Input placeholder="Position" value={values.position} onChange={(e) => setValues(pre => ({ ...pre, position: e.target.value }))} />
                </div>
                <div className='my-2'>
                    <Input placeholder="Company Name" value={values.companyName} onChange={(e) => setValues(pre => ({ ...pre, companyName: e.target.value }))} />
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-grid'>
                            <DatePicker  onChange={(date, dateString) => onChange(date, dateString, true)} id='join-date'
                                placeholder=" join Date" />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-grid'>
                            <DatePicker onChange={(date, dateString) => onChange(date, dateString, false)} placeholder=" End Date" id='end-date' />
                        </div>
                    </div>
                </div>
                <div className='my-2'>
                    <TextArea rows={4} placeholder="Description" maxLength={250} value={values.description} onChange={(e) => setValues(pre => ({ ...pre, description: e.target.value }))} />
                </div>
                <div className='d-grid'>
                    <button type="submit" className='btn btn-primary'>
                        Add to List
                    </button>
                </div>
            </form>
            <div>
                <div>
                    <div className='row'>
                        {list.map((item, i) => (
                            <div className='col-lg-6 col-sm-12 col-md-6'>
                                <Card
                                    key={item.id}
                                    style={{
                                        width: '100%',
                                        marginTop: 16,
                                    }}
                                    actions={[
                                        <DeleteOutlined key='delete' onClick={() => showDeleteConfirm(i)} />,
                                        <EditOutlined key="edit" onClick={() => setValues(item)} />,
                                    ]}
                                >
                                    <div><span className='fw-bold'>Position : </span> {item.position}</div>
                                    <div><span className='fw-bold'>Company Name : </span> {item.companyName}</div>
                                    <div><span className='fw-bold'>Join Date : </span> {item.join}</div>
                                    <div><span className='fw-bold'>End Date : </span> {item.end}</div>
                                    <div><span className='fw-bold'>Description : </span> {item.description}</div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
