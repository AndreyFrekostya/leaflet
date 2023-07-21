import { ColumnsType } from "antd/es/table";

export interface DataType {
    key: React.Key;
    route: string;
    point1: string;
    point2: string;
    point3: string;
}
export const dataSource:DataType[] = [
    {
        key: '1',
        route: 'Маршрут №1',
        point1: "59.84660399,30.29496392",
        point2: "59.82934196,30.42423701",
        point3: "59.83567701,30.38064206"
    },
    {
        key: '2',
        route: 'Маршрут №2',
        point1: "59.82934196,30.42423701",
        point2: "59.82761295,30.41705607",
        point3: "59.84660399,30.29496392"
    },
    {
        key: '3',
        route: 'Маршрут №3',
        point1: "59.83567701,30.38064206",
        point2: "59.84660399,30.29496392",
        point3: "59.82761295,30.41705607"
    },
];


export const columns:ColumnsType<DataType> =[
    {
        title:'Маршрут',
        dataIndex: 'route',
        key: 'route',
    },
    {
        title:'Точка 1 (lat, lng)',
        dataIndex: 'point1',
        key: 'point1',
        render: (text:string) => {
            let textSplited=text.split(',')
            if(textSplited[0] && textSplited[1]){
                return <>{textSplited[0]},<br/>{textSplited[1]}</>
            }
        }
    },
    {
        title:'Точка 2 (lat, lng)',
        dataIndex: 'point2',
        key: 'point1',
        render: (text:string) => {
            let textSplited=text.split(',')
            if(textSplited[0] && textSplited[1]){
                return <>{textSplited[0]},<br/>{textSplited[1]}</>
            }
        }
    },
    {
        title:'Точка 3 (lat, lng)',
        dataIndex: 'point3',
        key: 'point1',
        render: (text:string) => {
            let textSplited=text.split(',')
            if(textSplited[0] && textSplited[1]){
                return <>{textSplited[0]},<br/>{textSplited[1]}</>
            }
        }
    },
]