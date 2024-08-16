
import { Button, Tag } from "antd"
import {useNavigate} from "react-router-dom";
import WithPermission from "@common/components/aoplatform/WithPermission";
import { FC, ReactNode } from "react";
import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";


class InsidePageProps {
    showBanner?:boolean = true
    pageTitle:string = ''
    tagList?:Array<{label:string|ReactNode}> = []
    children:React.ReactNode
    showBtn?:boolean = false
    btnTitle?:string = ''
    description?:string = ''
    onBtnClick?:()=>void
    backUrl?:string = '/'
    btnAccess?:string
    showBorder?:boolean = true
    className?:string = ''
    contentClassName?:string=''
    /** 整个页面滚动 */
    scrollPage?:boolean = true
}

const InsidePage:FC<InsidePageProps> = ({showBanner=true,pageTitle,tagList,showBtn,btnTitle,btnAccess,description,children,onBtnClick,backUrl,showBorder=true,className='',contentClassName='',scrollPage=true})=>{
    const navigate = useNavigate();

    const goBack = () => {
        navigate(backUrl || '/');
    };
    return (
        // <div className="h-full flex flex-col flex-1 overflow-hidden bg-[#f7f8fa]">
        <div className={`h-full flex flex-col flex-1 overflow-hidden  ${className}`}>
            { showBanner &&  <div className={`border-[0px] mr-PAGE_INSIDE_X ${showBorder ? 'border-b-[1px] border-solid border-BORDER' : ''}`}>
                <div className="mb-[30px]">
                    {backUrl &&<div className="text-[18px] leading-[25px] mb-[12px]">
                            <Button type="text" onClick={goBack}><ArrowLeftOutlined className="max-h-[14px]" />返回</Button>
                        </div>}
                    <div className="flex justify-between mb-[20px] items-center ">
                        <div className="flex items-center  gap-TAG_LEFT ">
                            <p className="text-theme text-[26px] ">{pageTitle}</p>
                            {tagList && tagList?.length > 0 && tagList?.map((tag)=>{
                                return ( <Tag key={tag.label as string} bordered={false} >{tag.label}</Tag>)
                            })}
                        </div>
                        {showBtn && <WithPermission access={btnAccess}><Button type="primary" onClick={()=> {
                            onBtnClick&&onBtnClick()
                        }}>{btnTitle}</Button></WithPermission>}
                    </div>
                    <p >
                        {description}
                    </p>
                </div>
            </div>}
            <div className={`h-full  ${scrollPage ? 'overflow-hidden' : 'overflow-auto'} ${contentClassName || ''}`}>{children}</div>
        </div>
    )
}

export default InsidePage