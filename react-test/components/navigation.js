import Info from "./info";
import Content from "./content";
import React from "react";
import Http from '../shared/services.js';

class Navigation extends React.Component{
    
    options = [10 ,20 ,50 ,100];
    persons = ['Wolverine','Storm','Mary Jane','Thor'];
    state = {
        filter:'',
        filters:this.options[0],
        cards:[],
        CN :{ // class names
            lis:'nav-item col',
            tab:'tab-pane fade',
            prog:'d-none'
        }
    };
    /**
   * almaceno el valor en el estado por campo y lanzo la consulta
   * @param event "campo"
   * @returns 'n/a'
   */
    handleChange = (event) =>{
        this.state.filter = event.target.value;
        this.pre();
    }
    /**
   * no desencadeno submit, almaceno el valor en el estado por campo y lanzo la consulta
   * @param event "boton"
   * @returns 'n/a'
   */
    handleButton = (event) =>{
        event.preventDefault();
        this.state.filter = event.target.value;
        this.pre();
    }
    /**
   * no desencadeno submit, y lanzo la consulta
   * @param event "submit"
   * @returns 'n/a'
   */
    handleSubmit = (event) =>{
        event.preventDefault();
        this.pre();
    }
    /**
   * muestro la barra de cargando con delay y lanzo la consulta
   * @param 'n/a'
   * @returns 'n/a'
   */
    pre(){
        this.state.CN.prog = 'd-block';
        this.sS();
        setTimeout(() => {
         this.go();
        });
    }
    /**
   * actualizo el estado
   * @param 'n/a'
   * @returns 'n/a'
   */
    sS(){
        this.setState(this.state);
    }
    /**
   * consulta a back
   * @param 'n/a'
   * @returns render de componente
   */
    async go(){
        const s = this.state.filters;
        const v = this.state.filter;
        const r =()=>{
            setTimeout(() => {
                this.state.CN.prog = 'd-none';
                this.sS();
            });
        }
        try {
            const res =await Http('characters?',
            (v.length>0?'&nameStartsWith='+v:'')+
            '&limit='+s);
            if(res.data.code == 200){
                this.state.cards = {data:res.data.data.results,copyright:res.data.copyright};
                r();
                this.render();
            }else{
                r();
            }
        } catch (error) {
            r();
            console.clear();
        }
    }
    /**
   * render de componente
   */
    render(){
        return (
        <div className="container">
            <br/>
            <ul className="nav nav-tabs text-center row" id="myTab" role="tablist">
                <li className={this.state.CN.lis} role="presentation">
                    <a className="nav-link active" id="wow-tab" data-toggle="tab" href="#wow" role="tab" aria-controls="wow" aria-selected="true">Woooow</a>
                </li>
                <li className={this.state.CN.lis} role="presentation">
                    <a className="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">m&aacute;s</a>
                </li>
            </ul>
            <br/>
            <div className="tab-content" id="myTabContent">
                <div className={this.state.CN.tab+' show active'}  id="wow" role="tabpanel" aria-labelledby="wow-tab">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                            </div>
                            <input type="text" name="filter" className="form-control" onKeyUp={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.CN.prog}>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
                        </div>
                    </div>
                    <div className="row text-center">
                    {this.options.map((e)=>{
                        return (
                            <div className="col-3" key={'radio'+e}>
                                <div className="radio-buttons">
                                <input type="radio" name="filters" id={'opt'+e} onChange={this.handleChange}
                                 value ={e} checked={this.state.filters == e}/>
                                <label htmlFor={e}>&nbsp;{e}</label>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <div className="row text-center">
                    {this.persons.map((e)=>{
                        return (
                            <div className="col" key={'btn'+e}>
                                <input className="col btn btn-dark" type="button" name={e} id={'btn'+e} onClick={this.handleButton}
                                 value ={e}/>
                            </div>
                        )
                    })}
                    </div>
                </form>
                <div className="row justify-content-center"><br/>
                    <Content form={this.state.cards}></Content>
                </div>
                </div>
                <div className={this.state.CN.tab} id="info" role="tabpanel" aria-labelledby="info-tab"><Info></Info></div>
            </div>
      </div>
    )
  }
}
  export default Navigation;