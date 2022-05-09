import React from 'react';
import ReactDOM from 'react-dom';

export default class Index
    extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            id: "",
            task: "",
            tasks: [],
            indexEdicao: -1,
            filter: ""
        }

    }

    add = () => {
        let tasksAux = this.state.tasks;

        if(this.state.indexEdicao == -1)
            tasksAux.push(this.state.task);
        else
            tasksAux[this.state.indexEdicao] = this.state.task;

        this.setState ({
            indexEdicao: -1,
            id: "",
            task: "",
            tasks: tasksAux
        });
    }

    delete = (i) => {
        let tasksAux = this.state.tasks;
        let index = -1;
        
        for(let pos = 0;pos < tasksAux.length;pos++)
            if(tasksAux[pos] == i)
                index = pos;
        if(index > -1) {
            tasksAux.splice(index, 1)
            this.setState ({
                tasks: tasksAux
            })
        }
    }

    edit = (i) => {
        let tasksAux = this.state.tasks;
        let index = tasksAux.findIndex(task => task == i)

        if(index > -1)
        {
            let taskAux = tasksAux[index];
            this.setState ({
                task: taskAux,
                indexEdicao: index
            }); 
        }
    }

    search = (i) => {

    }

    render = () => {
        let saida =
            <>
                <label>ID: </label>
                <br />  
                <input type="text" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })}/>
                <br />
                <label>Task: </label>
                <br />
                <input type="text" value={this.state.task} onChange={(e) => this.setState({ task: e.target.value })}/>
                <button type="button" onClick={() => this.add()}>Add</button>
                
                <br />
                <br />
                <label>Search: </label>
                <br />
                <input type="text" value={this.state.filter} onChange={(e) => this.setState({ filter: e.target.value })}/>
                <button type="button" onClick={() => this.search()}>Search</button>

                <br />
                <br />
                <table>
                    {
                        this.state.tasks.map(i => { return (
                            <tr>
                                <td>{i}</td>
                                <td>
                                    <button type="button" onClick={() => this.delete(i)}>Delete</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => this.edit(i)}>Edit</button>
                                </td>
                            </tr>
                        )})
                    }
                </table>
            </>
        return saida;
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));