const getGroups = async () => {
    try{
      const res = await fetch('http://localhost:3000/groups')
      if(res.ok){
        const groups = res.json()
        return groups
      }
      else {
        throw new error("Error, can't get data")
      }
    }
    catch (error){
      console.log(error)
    }
  }
  export { getGroups }
  