import { TourProps } from "antd"
import { useEffect, useRef, useState } from "react"

export default function useTour() {
  const questionsRef = useRef<HTMLAnchorElement>(null)
  const stepsRef = useRef<HTMLAnchorElement>(null)
  const previewRef = useRef<HTMLAnchorElement>(null)
  const [tourOpen, setTourOpen] = useState(false)

  const tourSteps: TourProps['steps'] = [
    {
      title: 'Questions',
      description: 'First add some questions',
      target: () => questionsRef.current!
    },
    {
      title: 'Steps',
      description: 'Then add steps and bind questions to them',
      target: () => stepsRef.current!
    },
    {
      title: 'Preview',
      description: 'After that you can see the result in preview',
      target: () => previewRef.current!
    }
  ]

  useEffect(() => {
    if (localStorage.getItem('TOUR') !== 'done') {
      setTimeout(() => {
        setTourOpen(true)
      }, 3000)
    }
  }, [])

  const handleCloseTour = () => {
    setTourOpen(false)
    localStorage.setItem('TOUR', 'done')
  }

  return { tourOpen, handleCloseTour, questionsRef, stepsRef, previewRef, tourSteps }
}