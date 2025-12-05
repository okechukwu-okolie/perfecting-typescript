import React from 'react'
import { Badge } from './components/04_AsConstVariable'
import { Button } from './components/05_ComponentProps'
import { Counter } from './components/06_state'
import { FormExample } from './components/07_events'
import { TypedReducer } from './components/08_typedUseReducer'
// import { UserCard } from './components/01_requiredOptionalProps'
// import GreetA, { GreetB } from './components/02_defaultProps'
// import { NewPanel, NewPanel2, Panel } from './components/03_childrenReactNode'

const App = () => {
  return (
    // <div style={{backgroundColor:'lightgray',height:'full'}}>
    // <div style={{display:'flex', flexDirection:'column', gap:'20px', padding:'20px'}}>
    //   <UserCard id="1" name="John Doe" subtitle="subtitled in greek"/>
    //   <p>second component</p>
    //   <GreetA  shout={true} designation="Manager"/>
    //   <GreetB name='laide lawal' shout={true} designation={<em><b>supervisor</b></em>} />
    //   <Panel title="Panel with content"/>
    //   <Panel title="Panel with content" children={<h1>Header</h1>}/>



    // </div>
    // <div>
    //   <NewPanel />
    //   <NewPanel title="Custom Title">
    //     <p>This is some custom content inside the NewPanel component.</p>
    //   </NewPanel>
    // </div>

    // <NewPanel2 title="Custom Title for NewPanel2" footer={<span>Custom Footer Content</span>} />
    // <NewPanel2 >
    //   <p>This is some custom content inside the NewPanel2 component.</p>
    // </NewPanel2>
    // </div>
    <div>
      <Badge label="Default Badge" variant=''/>
      <Button type='range' onChange={()=>alert('clicked')} variant='secondary'/>

        <Counter/>
        <FormExample/>
        <TypedReducer />
    </div>
  )
}

export default App
