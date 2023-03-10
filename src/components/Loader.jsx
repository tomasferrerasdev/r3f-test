import style from './loader.module.css'

export const Loader = () => {
  return (
    <div className="loader-container">
      <h1>
        <p>
          We are <span id="spin"></span>
        </p>
      </h1>
    </div>
  )
}
