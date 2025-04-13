import React from 'react'
import ava1 from "../../assets/ava1.svg"

function RazblockUser() {
  return (
    <div

     className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      
                      <div
                       className="flex justify-center w-[336px] h-[286px] items-center">
                          <div
                
                              className="!bg-gray-200 rounded-[24px] p-5 max-w-[360px] w-full"
                          >
                              <h1 className="text-center mb-4 font-bold text-[23px]">
                                  Вы точно хотите <br/> разблокировать??
                              </h1>
      
                              <div className="flex items-start mb-4 mt-4">
                                  <img src={ava1} alt="Аватар" className="w-10 h-10 rounded-full"/>
      
                                  <div className="ml-4 flex flex-col">
                                      <div className="flex items-center">
                                          <h2 className=" font-semibold text-base ">Марина Сополова</h2>
                                       
                                      </div>
      
                                      <div className="flex items-center text-sm text-gray-600 mt-1">
                                          <p>Дата регистрации 11.12.24</p>
                                     
                                      </div>
                                  </div>
                              </div>
      
                              <div className="flex items-center flex-col gap-2">
                                  <button
                                    
                                      style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                                      className="p-2 h-[46px] w-[296px] px-30 rounded-[10px] text-white mb-2"
                                  >
                                    
                                      Разблокировать
                                  </button>
      
                                  <button
                                  
                                      className="!bg-black p-2 h-[46px] w-[296px] px-30 rounded-[10px] text-white"
                                  >
                                    Отмена
                                  </button>
                              </div>
                          </div>
                      </div>
    </div>
  )
}

export default RazblockUser