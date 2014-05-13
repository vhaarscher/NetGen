
// All these functions deal with submitting adapted information to the config file on the bottom of the page.

	//////////////////////////////////////////////////////////////// IN FILE INFO  //////////////////////////////////
function submitInInputs()
{
	var text=localStorage.getItem("in_file_name");
		document.getElementById("wname").innerHTML=text;
		
		text=localStorage.getItem("in_file_directory");
		document.getElementById("wdirectory").innerHTML=text;
		
		text=localStorage.getItem("in_file_extension");
		document.getElementById("wextension").innerHTML=text;
		
		text=localStorage.getItem("in_file_delimiter");
		document.getElementById("wdelimiter").innerHTML=text;
		
		text=localStorage.getItem("in_file_quote");
		document.getElementById("wquote").innerHTML=text;
		
		text=localStorage.getItem("in_file_missing_value");
		document.getElementById("wmissing").innerHTML=text;

}		

	
/////////////////////////////////////////////////////////////// OUT FILE INFO//////////////////////////////

function submitOutInputs()
{
	var text=localStorage.getItem("out_file_name");
		document.getElementById("wOutname").innerHTML=text;
		
		text=localStorage.getItem("out_file_directory");
		document.getElementById("wOutdirectory").innerHTML=text;
		
		text=localStorage.getItem("out_file_extension");
		document.getElementById("wOutextension").innerHTML=text;
		
		text=localStorage.getItem("out_file_delimiter");
		document.getElementById("wOutdelimiter").innerHTML=text;
		
		text=localStorage.getItem("out_file_missing_value");
		document.getElementById("wOutmissing").innerHTML=text;
		
		text=localStorage.getItem("out_file_separate_line");
		document.getElementById("wOutseparate").innerHTML=text;

		var Single=localStorage.getItem("SingleFile");
		if(Single=="false")
		{
			document.getElementById("wOutsingle").innerHTML="off";
		}
		else
		{
			document.getElementById("wOutsingle").innerHTML="on";
		}
		
}		


		
//////////////////////////////////////////////////////////////// RAW DATA STRUCTURE  //////////////////////////////////
function submitRawInputs()
{
	document.getElementById("wRawStructure").innerHTML=localStorage.getItem("RawStruc");
}

	
	//////////////////////////////////////////////////////////////// CLEAN DATA STRUCTURE  //////////////////////////////////
	
function submitCleanInputs()
{
	document.getElementById("wCleanStructure").innerHTML=localStorage.getItem("CleanStruc");
}




///////////////////////////////////////////////////////////// MAPPING SUBMIT //////////////////////////////


function submitMappingProcesses()
{
	var nbr_processes=localStorage.getItem('nbr_processes');
	var nbr_mapping_files=document.getElementById('mapping_file_number').value;
	var nbr_out_files=document.getElementById('in_file_number').value;
	var text='';
	
	//submit_mapping_directory
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_directory'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_directory'+nbr_processes);
	document.getElementById("wMappingdirectory").innerHTML=text;
	
	//submit_mapping_delimiter
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_delimiter'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_delimiter'+nbr_processes);
	document.getElementById("wMappingdelimiter").innerHTML=text;
	
	//submit_mapping_extension
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_extension'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_extension'+nbr_processes);
	document.getElementById("wMappingextension").innerHTML=text;
	
	//submit_mapping_name
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_name'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_name'+nbr_processes);
	document.getElementById("wMappingname").innerHTML=text;
	
	//submit_mapping_out_file_name
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_out_file_name'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_out_file_name'+nbr_processes);
	document.getElementById("wMappingOutname").innerHTML=text;
	
	//submit_mapping_replace_ids
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_replace_ids'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_replace_ids'+nbr_processes);
	document.getElementById("wMappingReplaceIds").innerHTML=text;
	
	//submit_mapping_kept_id_position
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_kept_id_position'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_kept_id_position'+nbr_processes);
	document.getElementById("wMappingKeptIdPosition").innerHTML=text;
	
	//submit_mapping_lost_id_position
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_lost_id_position'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_lost_id_position'+nbr_processes);
	document.getElementById("wMappingLostIdPosition").innerHTML=text;
	
	//submit_mapping_target_position
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_position'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_position'+nbr_processes);
	text+=']';
	document.getElementById("wMappingTargetPosition").innerHTML=text;
	
	//submit_mapping_drop_unreferenced_entries
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_drop_unreferenced_entries'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_drop_unreferenced_entries'+nbr_processes);
	document.getElementById("wMappingDropUnreferencedEntries").innerHTML=text;
	
	//submit_mapping_target_unreferenced_entries
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_unreferenced_entries'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_unreferenced_entries'+nbr_processes);
	text+=']';
	document.getElementById("wMappingTargetUnreferencedEntries").innerHTML=text;
	
	//submit_mapping_drop_ghosts
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_drop_ghosts'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_drop_ghosts'+nbr_processes);
	document.getElementById("wMappingDropGhosts").innerHTML=text;
	
	//submit_mapping_remove_duplicates
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_remove_duplicates'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_remove_duplicates'+nbr_processes);
	document.getElementById("wMappingRemoveDuplicates").innerHTML=text;
	
	//submit_mapping_target_duplicates_set
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_duplicates_set'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_duplicates_set'+nbr_processes);
	text+=']';
	document.getElementById("wMappingTargetDuplicatesSet").innerHTML=text;
	
	//submit_mapping_merge_entries
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_merge_entries'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_merge_entries'+nbr_processes);
	document.getElementById("wMappingMergeEntries").innerHTML=text;
	
	//submit_mapping_target_merge_set
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_merge_set'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_merge_set'+nbr_processes);
	text+=']';
	document.getElementById("wMappingTargetMergeSet").innerHTML=text;
	
	//submit_mapping_commands
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_commands'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_commands'+nbr_processes);
	text+=']';
	document.getElementById("wMappingCommands").innerHTML=text;
	
	

}