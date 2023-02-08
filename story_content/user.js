function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WCpfBrEEFN":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxx1NDPk94JH-deMiZNvWMm9Zlm6IQzLpmY94T-jqiZZ5yeRsVO8N0_wkKTfwBUi1M4/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

