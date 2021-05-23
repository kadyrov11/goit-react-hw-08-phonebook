import { useState } from 'react'
const useForm = (initialState, onSubmit = () =>{}) =>{
  const [formData, setformData] = useState(initialState)
  const handleChange = ({target}) => {
    const [value, name] = target
    setformData({...formData,[name]:value})
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(formData)
    setformData(initialState)
  }
  return [formData,handleChange,handleSubmit,setformData]
}
export default useForm