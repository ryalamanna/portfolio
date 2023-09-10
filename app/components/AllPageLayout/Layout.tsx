import s from './AllPageLayout.module.scss'
const Layout = (props : {children  : React.ReactNode , heading:string , subheading : string}) => {
  return (
    <div className={s.AllPageLayout}>
        <div className="globalContainer">
            <h1 className={`${s.heading} font-bold`}>{props.heading}</h1>
            <p className={`${s.sub_head} font-regular`}>{props.subheading}</p>
        </div> 
        <hr className={s.main_divider} />
        <div className="globalContainer">
            {props.children}
        </div>
    </div>
  )
}

export default Layout