import Tilt from 'react-parallax-tilt'

const Logo = () => {
  return (
    <Tilt style={{ height: '200px', width: '200px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          height: '100%',
        }}
      >
        <h1 className="black">Face Recognition App</h1>
      </div>
    </Tilt>
  )
}

export { Logo }
