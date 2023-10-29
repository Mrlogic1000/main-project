import React from 'react'
import Modal from './Modal'

function CreateTask() {
  return (
    <Modal title='/task'>
      <form action="">

        <div className='inline'>
          <div className='input-control'>
            <label className='label' htmlFor="name">Name</label>
            <input type="text" placeholder='Name' />
          </div>

          <div className='input-control'>
            <label className='label' htmlFor="type">Type</label>
            <select name="" id="type" required>
              <option value="" disabled selected hidden>Choose Type</option>
              <option value="Name">Name</option>
              <option value="Networking">Networking</option>
              <option value="Name">Name</option>
            </select>
          </div>

        </div>

        <div className='inline'>
          <label className='label' htmlFor="title">Title</label>
          <input type="text" placeholder='Title' />
        </div>

        <div className='inline'>
          <div className='input-control'>
            <label className='label' htmlFor="name">Name</label>
            <input type="text" placeholder='Name' />
          </div>

          <div className='input-control'>
            <label className='label' htmlFor="type">Type</label>
            <select name="" id="type" required>
              <option value="" disabled selected hidden>Choose Type</option>
              <option value="Name">Name</option>
              <option value="Networking">Networking</option>
              <option value="Name">Name</option>
            </select>
          </div>

        </div>
        <button>Create</button>

      </form>
    </Modal>
  )



}

export default CreateTask