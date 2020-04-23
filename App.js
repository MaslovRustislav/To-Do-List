/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './App.css';
class App extends  React.Component{

  state = {
    task: " ",
    tasks: [],
    dateTask: [],
    editedTask: "",
    flag: false,
    todayDate: new Date(),
    daysOfWeekCurrent: {},
    result: "",
    changeMonthFlag: 0,
    daysOfWeekI: "",
    monthName: ["January","February","March","April","May","June","July","August","September","October","November","December"],
 
  }
  changeTaskValue = (event)=> {   
    this.setState({
        task: event.target.value,
    })
  }
  editTaskValue = (event)=> {   
    this.setState({
        editedTask: event.target.value
    })
  }
  doneTask = (i) =>{
    if(this.state.tasks[i].isChecked === 1){
    var currentTask = this.state.tasks
    currentTask[i].isChecked = 2
    }
    else{
    currentTask = this.state.tasks
    currentTask[i].isChecked = 1
    }
     this.setState({
       tasks: currentTask,
       
     })
     
  }
  editButton =(i,element) =>{    
     if(this.state.tasks[i].isChecked === 1){
       var currentEdit = this.state.tasks
       currentEdit[i].isChecked = 3
       
     }
     else{
      currentEdit = this.state.tasks
      currentEdit[i].isChecked = 1
     }
     this.setState({
      tasks: currentEdit,
      editedTask: element.taskName,
    })
  }
  cancelButton = () =>{
    document.getElementById("textInput").value = "";
  }
  deleteTask = (i)=>{
    this.state.tasks.splice(i,1) 
    this.setState({ 
        task: ''
    })
}

  saveEditedTask = (i,element) =>{
    var editTaskName = this.state.tasks
       editTaskName[i].taskName = this.state.editedTask
    var currentSaveEdit = this.state.tasks
    currentSaveEdit[i].isChecked = 1
      this.setState({
        tasks: currentSaveEdit,
        tasks: editTaskName
      })
      
  }
  getLastDayOfMonth = ()=>{
    let date = new Date(this.state.todayDate)
    let result1 = 0 
    date.setMonth(this.state.changeMonthFlag)
    for(let i = date.getDate(); i <= 31; i++){
        
        if(result1 > date.getDate() ){
        date.setDate(date.getDate() + 1)
    }
    if(date.getDate() === 1 && i > 1){
        date.setDate(date.getDate() - 1)
        break
}
     
         result1= date.getDate()  + 1

    }
    
   this.setState({
    daysOfWeekCurrent: this.state.daysOfWeekCurrent.maxDayOfMonth = date.getDate()
   })
   
}

  startCalendar=()=>{
    this.getLastDayOfMonth()
    let counter = 0
    let daysOfWeek = [[],[],[],[],[],[],[]]
    let currentDate = new Date(this.state.todayDate)
        currentDate.setMonth(this.state.todayDate.getMonth())

    for(currentDate.setDate(1); currentDate.getDate() <= this.state.daysOfWeekCurrent.maxDayOfMonth; currentDate.setDate(currentDate.getDate() + 1)){
      if( currentDate.getDate() === 1 &&counter !== 0){
        break
      }
        counter++
        

          
          if(currentDate.getDate() === 1){
            daysOfWeek[0].push({calendarDate: "",calendarArr:[], calendarBool:false})
           }
                if(currentDate.getDay() === 0){
                  daysOfWeek[0].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
                  console.log(daysOfWeek)
                          if(currentDate.getDate() <= 1){
                             daysOfWeek[0].shift()
                         
                           }
                           
                      continue
                 }


            if(currentDate.getDate() === 1){
              daysOfWeek[1].push({calendarDate: "",calendarArr:[], calendarBool:false})
             }
                if(currentDate.getDay() === 1){
                  daysOfWeek[1].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
                          if(currentDate.getDate() <= 1){
                            daysOfWeek[1].shift()
                            
                            }
                            
                        continue
                 }

                 
            if(currentDate.getDate() === 1){
              daysOfWeek[2].push({calendarDate: "",calendarArr:[], calendarBool:false})
             }
                if(currentDate.getDay() === 2){
                  daysOfWeek[2].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
                          if(currentDate.getDate() === 1){
                            daysOfWeek[2].shift()
                            
                           }     
                          
                        continue
                        
                 }

                 
            if(currentDate.getDate() === 1){
              daysOfWeek[3].push({calendarDate: "",calendarArr:[], calendarBool:false})
              }
                  if(currentDate.getDay() === 3){
                    daysOfWeek[3].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
                            if(currentDate.getDate() === 1){
                              daysOfWeek[3].shift()
                              
                              }
                             
                          continue
                    }
            if(currentDate.getDate() === 1){
              daysOfWeek[4].push({calendarDate: "",calendarArr:[], calendarBool:false})
              
              }
                  if(currentDate.getDay() === 4){
                    daysOfWeek[4].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
                    
                            if(currentDate.getDate() === 1){
                              daysOfWeek[4].shift()
                             
                            }
                           
                            continue
                  }


            if(currentDate.getDate() <= 1){
              daysOfWeek[5].push({calendarDate: "",calendarArr:[], calendarBool:false})
              }
                  if(currentDate.getDay() === 5){
                    daysOfWeek[5].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
                            if(currentDate.getDate() <= 1){
                              daysOfWeek[5].shift()
                              
                            }
                           
                            continue

                  }
                  
                 
      else{
        daysOfWeek[6].push({calendarDate: currentDate.getDate() , calendarArr:[], calendarBool:false})
       
      }
      

    }
    console.log('daysOfWeek',daysOfWeek)
    this.setState({
      flag: true,
      daysOfWeekCurrent:  {
        daysOfWeek: daysOfWeek
      } 
    }) 
  }
  changeMonthAdd = ()=>{
    this.state.todayDate.setMonth(this.state.todayDate.getMonth() + 1)
    this.startCalendar()
    console.log(this.state.todayDate.getMonth())
  }
  changeMonthDecrease = ()=>{
    this.state.todayDate.setMonth(this.state.todayDate.getMonth() -1 )
    this.startCalendar()
    console.log(this.state.todayDate.getMonth())
  }
  
  setMark =(element,i)=>{
  const copyOfdaysOfWeekCurrent = this.state.daysOfWeekCurrent;
  copyOfdaysOfWeekCurrent.daysOfWeek[i].map((day, index)=> {
     
    if(day.calendarDate === element.calendarDate){
      day.calendarBool = true;
      
    }
    
  })
          this.setState({
            daysOfWeekCurrent: copyOfdaysOfWeekCurrent
           
           })
  }



  addTask = () =>{
   
    let date = new Date();
  date = date.getMinutes()+ "."+  date.getHours() + "." + date.getDate()+ "." + date.getMonth() 
     var obj ={
      taskName: this.state.task,
      isChecked: 1,
      date: new Date()
    }
   
    document.getElementById("textInput").value = "";
    if(this.state.task.length !== 0 && this.state.task.length !== 0){
    this.setState({
      task:'',
      tasks: [...this.state.tasks, obj],
    })
  }
  } 
  render() {
  
    return(
    <div className="container">
      <h1 style ={{ textAlign: 'center'}}>TO DO </h1>
       <div className="showBLock">
       
        
        <img style ={{ marginLeft: '30%' }} src="https://lh3.googleusercontent.com/scIM9FlsD9kMH_v4dsT5tKW_xg61ZM3bdrywy7nVaRBan53WUjE-73KRWch6X7V2mNKc" alt="HERE IS IMAGE"/>
        {
  this.state.flag === false  ? console.log("loh"): 

  <div className=" Calendar">
    <div className ="changeButtonsBlock">
      <div className ="changeMonthDecrease" onClick ={() => this.changeMonthDecrease()}></div>
      <div  className="changeMonthAdd" onClick ={() => this.changeMonthAdd()}></div>
    </div>
       <table border = "3" cellpadding="3" >
       <tr>
        <th>
          {this.state.todayDate.getFullYear() +  "  " +this.state.monthName[this.state.todayDate.getMonth()]}</th>
               </tr>
           <div>
            
                <tr className = "Sunday">

                  <th>Sunday</th>
                  {this.state.daysOfWeekCurrent.daysOfWeek[0].map((element,i)=>{
                       console.log()
         return(
                      element.calendarBool === false?
                    <td onClick={() => this.setMark(element,0)}>{element.calendarDate}</td>:
                    <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

                    
                    )     
                    
                                
                  })
                  
              }
              </tr>
              <tr className = "Monday">
                  <th>Monday</th>
            {this.state.daysOfWeekCurrent.daysOfWeek[1].map((element,i)=>{
              
              return(
                element.calendarBool === false?
              <td onClick={() => this.setMark(element,1)}>{element.calendarDate}</td>:
              <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

              
              )                      
                  })
              }
        </tr>
        <tr className = "Tuesday">
        <th>Tuesday</th>
        {this.state.daysOfWeekCurrent.daysOfWeek[2].map((element,i)=>{
          
          return(
            element.calendarBool === false?
          <td onClick={() => this.setMark(element,2)}>{element.calendarDate}</td>:
          <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

          
          )                        
        })
    }
        </tr>
        <tr className = "Wednesday">
        <th>Wednesday</th>
         
        {this.state.daysOfWeekCurrent.daysOfWeek[3].map((element,i)=>{
          
          return(
            element.calendarBool === false?
          <td onClick={() => this.setMark(element,3)}>{element.calendarDate}</td>:
          <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

          
          )                      
        })
    }
        </tr>
        <tr className = "Thursday">
        <th>Thursday</th>
        {this.state.daysOfWeekCurrent.daysOfWeek[4].map((element,i)=>{
         return(
          element.calendarBool === false?
        <td onClick={() => this.setMark(element,4)}>{element.calendarDate}</td>:
        <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

        
        )                       
        })
    }
        </tr>
        <tr className = "Friday">
        <th>Friday</th>
        {this.state.daysOfWeekCurrent.daysOfWeek[5].map((element,i)=>{
         return(
          element.calendarBool === false?
        <td onClick={() => this.setMark(element,5)}>{element.calendarDate}</td>:
        <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

        
        )                        
        })
    }

        </tr>
        <tr className = "Saturday">
        <th>Saturday</th>
        {this.state.daysOfWeekCurrent.daysOfWeek[6].map((element,i)=>{
          return(
            element.calendarBool === false?
          <td onClick={() => this.setMark(element,6)}>{element.calendarDate}</td>:
          <td style={{backgroundColor: "red",color: "white"}} onClick={() => this.setMark(element,i)}>{element.calendarDate}</td>

          
          )                       
        })
    }
       
        </tr>
           </div>

      </table> 
     
      
      </div>
  }
      </div>
      

      <ul>
          {
            
              this.state.tasks.map((element,i)=> {
                  
                return (
                <div className="taskBlock">
                    
                    <div className = "editButton" onClick={()=>this.editButton(i,element)}></div>
                    <div className = "doneButton" onClick={()=>this.doneTask(i,element)}></div> 
                    <div className = "deleteButton"onClick={()=>this.deleteTask(i)}></div>
                   
                    {
                      
                    element.isChecked === 2 ? <li className ="tasks" style ={{ textDecoration: "line-through" }} key={i+element.taskName}>{element.taskName}</li>:
                    element.isChecked === 3 ? 
                    <div className="editContainer">
                      <input id="test" value={this.state.editedTask} className="inputTaskEdit" type ="text" label={"name"}onChange={(event)=>this.editTaskValue(event)}/>
                      <div className="editCancelButton" onClick={()=>this.saveEditedTask(i,element)} ></div>
                    </div>:
                    <div className="TaskDate">
                      <li className="tasks"  key={i+element.taskName}>{element.taskName} {element.dateTask}</li>
                      
                      
                    </div>
                    } 
                </div>
                )                    
              })
          }
      </ul>
     
        <div className= "AddingTaskBlock">
            <input id="textInput" className="inputTask" placeholder="Write your task"  label={"name"} onChange={(event)=>this.changeTaskValue(event)}/>
            <div className = "addButton" onClick={()=>this.addTask()}></div>
            <div className = "cancelButton" onClick ={()=>this.cancelButton()}></div>
            <div className = "startCalendar" onClick={()=> this.startCalendar()} ></div>
            
            </div>
            
</div> 
     
  )}
        
        
}
export default App;
// var data = {
// 	"08.12.19":{


// 		tasks: [{
// 			taskName: 'do homework',
// 			isChecked: true,
// 			date: '120380198081374'
// 		},
// 		{
// 			taskName: 'to eat',
// 			isChecked: false,
// 			date: '120380198081374'
// 		}],
// 		isWeekend: true
// 	},
// 	"09.12.19":{


// 		tasks: [{
// 			taskName: 'do homework',
// 			isChecked: true,
// 			date: '120380198081374'
// 		},
// 		{
// 			taskName: 'to eat',
// 			isChecked: false,
// 			date: '120380198081374'
// 		}],
// 		isWeekend: false
// 	},
// 	"10.12.19":{


// 		tasks: [{
// 			taskName: 'do homework',
// 			isChecked: true,
// 			date: '120380198081374'
// 		},
// 		{
// 			taskName: 'to eat',
// 			isChecked: false,
// 			date: '120380198081374'
// 		}],
// 		isWeekend: false
// 	},
// };