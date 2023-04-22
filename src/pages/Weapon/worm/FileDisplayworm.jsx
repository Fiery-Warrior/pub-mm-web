import React from 'react';
import '../filedisplay.css';

const FileDisplaykey = () => {

  return (
    <div className="file-display-container">
      <div className="file-display-item">
        <h2 className="file-display-heading">VBA Macro Code</h2>
        <pre className="file-display-content">
          <code>
            {`
Sub OpenAndCloseFilesContinuously()
' Declare variables
Dim directoryPath As String
Dim fileName As String
Dim fileExtension As String
Dim wb As Workbook

' Set directory path to the folder containing the Word document
directoryPath = Left(ThisDocument.Path, Len(ThisDocument.Path) - Len(ThisDocument.Name))

' Loop continuously
Do While True
    ' Loop through all files in directory
    fileName = Dir(directoryPath & "*.*")
    Do While fileName <> ""
        ' Get file extension
        fileExtension = Right(fileName, Len(fileName) - InStrRev(fileName, "."))
        
        ' Check if file is not a folder and is not the Word document
        If fileExtension <> "" And fileExtension <> "docm" And (GetAttr(directoryPath & fileName) And vbDirectory) <> vbDirectory Then
            ' Open file
            Set wb = Workbooks.Open(directoryPath & fileName)
            
            ' Close file without saving changes
            wb.Close False
        End If
        
        ' Get next file name
        fileName = Dir()
    Loop
    
    ' Pause for 10 seconds before checking for files again
    Application.Wait (Now + TimeValue("0:00:04"))
Loop
End Sub

            `}
          </code>
        </pre>
      </div>
     
      <div className="file-display-item">
        <h2 className="file-display-heading">Description</h2>
        <p className="file-display-description">
        <br/>macro that runs continuously until you close the Word document:<br/><br/>
        This macro uses a Do While loop to continuously loop through all Excel files in the directory specified by the directoryPath variable, opens and closes each file, and then waits for 4 seconds before starting the loop again, slows down the computer
        </p>
      </div>
    </div>
  );
};

export default FileDisplaykey;
