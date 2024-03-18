export const LoginSection = () => {
  return (
    <form action="#" className="woocommerce-form-login">
      <div className="form-group">
        <label>Username or email *</label>
        <input type="text" className="form-control" placeholder="Username or email" />
      </div>
      <div className="form-group">
        <label>Password *</label>
        <input type="text" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group">
        <div className="custom-checkbox">
          <input type="checkbox" id="remembermylogin" />
          <label >Remember Me</label>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="th-btn">Login</button>
        <p className="mt-3 mb-0"><a className="text-reset" href="#">Lost your password?</a></p>
      </div>
    </form>
  )
}