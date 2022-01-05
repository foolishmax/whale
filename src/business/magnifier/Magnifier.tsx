import React, { useRef } from "react";
import './index.less';

export default function Magnifier() {
  const smallRef = useRef(null);
  const markRef = useRef(null);
  const bigRef = useRef(null);
  const bigImgRef = useRef(null);

  const onMouseMove = (event: any) => {
    if (!markRef.current || !smallRef.current || !bigRef.current || !bigImgRef.current) return;
    const mark = markRef.current as any;
    const small = smallRef.current as any;
    const big = bigRef.current as any;
    const bigImg = bigImgRef.current as any;

    // 得到遮罩相对于小图的偏移量(鼠标所在坐标-小图相对于body的偏移-遮罩本身宽度或高度的一半)
    let s_left = event.pageX - mark.offsetWidth / 2 - small.offsetLeft;
    let s_top = event.pageY - mark.offsetHeight / 2 - small.offsetTop;
    // 遮罩仅可以在小图内移动，所以需要计算遮罩偏移量的临界值（相对于小图的值）
    let max_left = small.offsetWidth - mark.offsetWidth;
    let max_top = small.offsetHeight - mark.offsetHeight;
    // 遮罩移动右侧大图也跟随移动（遮罩每移动1px，图片需要向相反对的方向移动n倍的距离）
    let n = big.offsetWidth / mark.offsetWidth
    // 遮罩跟随鼠标移动前判断：遮罩相对于小图的偏移量不能超出范围，超出范围要重新赋值（临界值在上边已经计算完成：max_left和max_top）
    // 判断水平边界
    if (s_left < 0) {
      s_left = 0
    } else if (s_left > max_left) {
      s_left = max_left
    }
    //判断垂直边界
    if (s_top < 0) {
      s_top = 0
    } else if (s_top > max_top) {
      s_top = max_top
    }
    // 给遮罩left和top赋值（动态的？因为e.pageX和e.pageY为变化的量），动起来！
    mark.style.left = s_left + "px";
    mark.style.top = s_top + "px";
    // 计算大图移动的距离
    let levelx = -n * s_left;
    let verticaly = -n * s_top;
    // 让图片动起来
    bigImg.style.left = levelx + "px";
    bigImg.style.top = verticaly + "px";
  }

  const onMouseEnter = () => {
    if (!markRef.current || !markRef.current) return;
    (markRef.current as any).style.display = "block";
    (bigRef.current as any).style.display = "block";
  }

  const onMouseLeave = () => {
    if (!markRef.current || !markRef.current) return;
    (markRef.current as any).style.display = "none";
    (bigRef.current as any).style.display = "none";
  }

  return (
    <div className="magnifier">
      <div className="small" ref={smallRef} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src="/whale/magnifier.webp" alt="" />
        <div className="mark" ref={markRef}></div>
      </div>
      <div className="big" ref={bigRef}>
        <img src="/whale/magnifier.webp" ref={bigImgRef} alt="" />
      </div>
    </div>
  )
}