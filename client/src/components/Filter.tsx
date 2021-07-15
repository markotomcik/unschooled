import { Component } from 'react'
import { EFilter } from '../Interfaces'
import { connect } from 'react-redux'

export class Filter extends Component<any, any> {
  handleChange = (e: any) => {
    this.props.setFilter(e.target.value)
  }

  render() {
    return (
      <div className="mb-2">
        <div className="flex flex-row flex-1 flex-wrap" onChange={this.handleChange}>
          <label className="flex flex-auto items-center m-1">
            <input type="radio" className="opacity-0 absolute h-8 w-8" name="filter" value={EFilter.All} />
            <div className="bg-white border-2 rounded-full border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
              <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <span className="ml-2 font-medium text-justify text-text">Show all</span>
          </label>
          <label className="flex-auto flex items-center m-1">
            <input type="radio" className="opacity-0 absolute h-8 w-8" name="filter" value={EFilter.Todo} defaultChecked />
            <div className="bg-white border-2 rounded-full border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
              <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <span className="ml-2 font-medium text-justify text-text">Show to do</span>
          </label>
          <label className="flex-auto flex items-center m-1">
            <input type="radio" className="opacity-0 absolute h-8 w-8" name="filter" value={EFilter.Done} />
            <div className="bg-white border-2 rounded-full border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
              <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <span className="ml-2 font-medium text-justify text-text">Show done</span>
          </label>
          <label className="flex-auto flex items-center m-1">
            <input type="radio" className="opacity-0 absolute h-8 w-8" name="filter" value={EFilter.Removed} />
            <div className="bg-white border-2 rounded-full border-input-light w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-input-dark">
              <svg className="fill-current hidden w-3 h-3 text-input-active pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-9 -11)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                  </g>
                </g>
              </svg>
            </div>
            <span className="ml-2 font-medium text-justify text-text">Show removed</span>
          </label>
        </div>
        <div className="m-1 rounded-lg font-medium text-text-secondary">{this.props.tasks.filter((task: any) => !task.complete && !task.cleared).length} left to do</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  tasks: state.tasks
})

export default connect(
  mapStateToProps
)(Filter)
