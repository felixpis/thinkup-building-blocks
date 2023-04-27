import { Carousel } from 'antd'
import React, { useRef } from 'react'
import { IStep } from '../../models/Step'
import StepSlide from './StepSlide'
import { CarouselRef } from 'antd/es/carousel'

interface Props {
  steps: IStep[]
}

const StepsPreview = ({ steps }: Props) => {
  const carouselRef = useRef<CarouselRef>(null)

  const handleNext = () => {
    carouselRef.current?.next()
  }
  return (
    <Carousel ref={carouselRef}>
      {steps.map(step => <div key={step.id}><StepSlide step={step} onNext={handleNext} /></div>)}
    </Carousel>
  )
}

export default StepsPreview