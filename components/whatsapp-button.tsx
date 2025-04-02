"use client"

import { useState } from "react"
import { X, Send, User, MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export default function WhatsAppButton() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    // Open WhatsApp with the phone number
    window.open(`https://wa.me/85298066356`, "_blank")

    // Show toast notification
    toast({
      title: "WhatsApp Contact",
      description: "Opening WhatsApp chat with Kit (+852 98066356)",
    })

    setIsOpen(false)
  }

  return (
    <>
      <button onClick={handleClick} className="whatsapp-button" aria-label="Contact via WhatsApp">
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      <div className={`whatsapp-chat ${isOpen ? "active" : ""}`}>
        <div className="whatsapp-header">
          <User className="h-5 w-5" />
          <h3>聯繫 Kit</h3>
        </div>
        <div className="whatsapp-body">
          <div className="whatsapp-message">
            您好！有任何關於行程的問題，請隨時聯繫我。
            <br />
            <br />
            Hello! If you have any questions about the trip, feel free to contact me.
          </div>
          <div className="whatsapp-message">WhatsApp: +852 98066356</div>
          <div className="whatsapp-preview">
            <img
              src="https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=2070&auto=format&fit=crop"
              alt="Trip Preview"
              className="whatsapp-preview-image"
            />
            <div className="whatsapp-preview-text">
              <h4>香港日本之旅 | Hong Kong & Japan Trip 2025</h4>
              <p>17天的冒險與文化體驗 | 17 Days of Adventure & Culture</p>
            </div>
          </div>
        </div>
        <div className="whatsapp-footer">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleSendMessage}
                  className="bg-[#25D366] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#128C7E] transition-colors"
                >
                  <Send className="h-4 w-4" />
                  開始聊天 | Start Chat
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>透過WhatsApp聯繫Kit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  )
}

