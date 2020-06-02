import React from "react"
import "../css/Portfolio.css"
import { Link } from "react-router-dom";



const Portfolio = () => {
      return (
            <div className="portfolioContainer">
            
                  <h1
                  className="titleCenterBox"> Coding Portfolio
                  </h1>
                  

                  <h2> Links to portfolio projects below. </h2>
                  
                   <p>
                  Click an item title to explore more details about the portfolio Item.
                  </p>
                  <ol id="portfolioList" />
             
             
                              
                              <li>
                            
                                    <p className="itemTitle"> Planetary Clickbait Quiz Application</p>
                                   <a className="portLinks" href="https://tcollins2011.github.io/Project_1/">Launch Planetary Clickbait Quiz Application</a>
                                   
                            
                              </li>
                              
                              
                              <div>
                              </div>
                              
                              <li>
                            
                                    <p className="itemTitle"> Interactive Daily Planner Application</p>
                                    <a className="portLinks" href="https://adamortolf.github.io/InteractiveDayPlanner/">Launch Interactive Daily Planner Application</a>
                                    
                    
                               </li>
                              
                              <div>
                              </div>

                              
                              <li>
                            
                                    <p className="itemTitle"> Employee Directory Search Application</p>
                                    <a className="portLinks" href="https://adamortolf.github.io/reactEmployeeDir/">Launch Employee Directory Search Application</a>
                                   
                            
                              </li>
                              
                              <div>
                              </div>
                              
                  
                              <li>
                                    
                                    <p className="itemTitle"> IQ Test Application </p>
                                    <a className="portLinks" href="https://tcollins2011.github.io/Project_1/">Launch IQ Test Application </a>
                           
                    
                              </li>

                              <div>
                              </div>
                              
                  
                               <li>
                            
                                    <p className="itemTitle"> Note Taker Application </p>
                                    <a className="portLinks" href="https://adamortolf.github.io/noteTaker/">Launch Note Taker Application</a>
                                   
                            
                              </li>
            </div>

      
          )
}

export default Portfolio;