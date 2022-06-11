import { render, fireEvent, cleanup,screen, getByLabelText } from "@testing-library/react";
import RadioButtons from "../RadioButtons";

it('Should render successfully',()=>{  //to check if 'Male,Female,All'  exists in the document or not
    render(<RadioButtons/>)
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Female')).toBeInTheDocument()
    expect(screen.getByText('All')).toBeInTheDocument()
})


it('Checking for checked option',()=>{ //to check if the options gets checked or not
    const {getByTestId,getByLabelText}=render(<RadioButtons/>)
    const testId=getByTestId('genderTest').querySelector('input')
    fireEvent.change(testId,{
        target:{value:'female'}//changing the radio selector to female
    })
    expect(testId.value).toBe('female') //checking if the radio select changed option is existing or not


    const testId1=getByTestId('genderTest').querySelector('input')
    fireEvent.change(testId1,{
        target:{value:'male'}//changing the radio selector to female
    })
    expect(testId1.value).toBe('male') //checking if the radio select changed option is existing or not


    //Chhecking if the radio butttons are clicked or not
    const testId2=getByLabelText('Male') 
    fireEvent.click(testId2)
    expect(testId2).toBeChecked()

    const testId3=getByLabelText('Female') 
    fireEvent.click(testId3)
    expect(testId3).toBeChecked()  //Here it checks if cheked option is female

    expect(testId2).not.toBeChecked() // here it checks if checked option is not male (thats why testid2 is used)
})




