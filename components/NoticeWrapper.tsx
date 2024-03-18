export const NoticeWrapper = ({ title }) => {
  return (
    <div className="woocommerce-notices-wrapper">
      <div style={{
        position: 'relative', 
        paddingTop: '11px', 
        paddingBottom: '11px',
        paddingLeft: '30px',
        paddingRight: '50px',
        fontWeight: '500',
        fontSize: '14px',
        marginBottom: '15px',
        borderRadius: '12px',
        backgroundColor: '#3e66f3',
        color: 'white'
      }}>{ title }</div>
    </div>
  )
}