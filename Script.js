function ranks(){
		var x = window.document.getElementById('trank').value
		var y = window.document.getElementById('yrank')
		switch(x){
			case 'Unranked':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Silver 1':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
	
			case 'Silver 2':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Silver 3':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Silver 4':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Silver Elite':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Silver Elite Master':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Gold Nova 1':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Gold Nova 2':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Gold Nova 3':
				document.getElementById('yrank').value = `O teu rank é demasiado baixo`
				break
			
			case 'Gold Nova Master':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break

			case 'Master Guardian 1':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break
			
			case 'Master Guardian 2':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break
			
			case 'Master Guardian Elite':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break

			case 'Distinguished Master Guardian':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break

			case 'Legendary Eagle':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break

			case 'Legendary Eagle Master':
				document.getElementById('yrank').value = `O teu rank enquadra-se`
				break

			default:
				document.getElementById('yrank').value = `O teu rank é demasiado alto`
				break
		}

	}