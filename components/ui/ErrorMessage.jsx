"use client"

import { AlertCircle, RefreshCw } from "lucide-react"

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-4 max-w-md mx-auto">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Network Error</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{message || "Unable to connect to the server"}</p>
            <p className="mt-1">Using mock data instead. You can still explore the interface.</p>
          </div>
          {onRetry && (
            <div className="mt-4">
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none"
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
