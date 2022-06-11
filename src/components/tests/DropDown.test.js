import { render, fireEvent, cleanup,screen, getByLabelText } from "@testing-library/react";
import DropDown from '../DropDown'


//  it('dropdown is getting rendered or not',()=>{
//      const {getAllByTestId}=render(<DropDown/>)
//     const testId=getAllByTestId('locationTestOption')
//      fireEvent.change(testId,{
//           target:{value:'AU'} //changing the value to AU to check if its changing or not
//      })
//      expect(testId.values).toBe('AU')
//  })



it('dropdown is getting rendered or not',()=>{
    const {getAllByTestId}=render(<DropDown/>)
    let testId1=getAllByTestId('locationTestOption')
    // fireEvent.change(testId,{
    //     target:{value:'AU'} //changing the value to AU to check if its changing or not
    // })
    expect(testId1[1].selected).toBeTruthy() 
})
