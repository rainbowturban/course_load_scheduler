package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendEditSectionAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionsAction;
import org.dselent.course_load_scheduler.client.action.SendNewSectionAction;
import org.dselent.course_load_scheduler.client.action.SendRemoveSectionAction;
import org.dselent.course_load_scheduler.client.callback.SendEditSectionCallback;
import org.dselent.course_load_scheduler.client.callback.SendGetSectionsCallback;
import org.dselent.course_load_scheduler.client.callback.SendNewSectionCallback;
import org.dselent.course_load_scheduler.client.callback.SendRemoveSectionCallback;
import org.dselent.course_load_scheduler.client.event.SendGetSectionsEvent;
import org.dselent.course_load_scheduler.client.event.SendEditSectionEvent;
import org.dselent.course_load_scheduler.client.event.SendNewSectionEvent;
import org.dselent.course_load_scheduler.client.event.SendRemoveSectionEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.SectionService;
import org.dselent.course_load_scheduler.client.translator.impl.EditSectionActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetSectionsActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.NewSectionActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.RemoveSectionActionTranslatorImpl;

//import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class SectionServiceImpl extends BaseServiceImpl implements SectionService{
	public SectionServiceImpl(){}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{

		//Example code (old format)
//		HandlerRegistration registration;
//
//		registration = eventBus.addHandler(SendLoginEvent.TYPE, this);
//		eventBusRegistration.put(SendLoginEvent.TYPE, registration);

		//bind events for Sections
		eventBusRegistration.put(SendNewSectionEvent.TYPE, eventBus.addHandler(SendNewSectionEvent.TYPE, this));
		eventBusRegistration.put(SendEditSectionEvent.TYPE, eventBus.addHandler(SendEditSectionEvent.TYPE, this));
		eventBusRegistration.put(SendRemoveSectionEvent.TYPE, eventBus.addHandler(SendRemoveSectionEvent.TYPE, this));
		eventBusRegistration.put(SendGetSectionsEvent.TYPE, eventBus.addHandler(SendGetSectionsEvent.TYPE, this));
				
	}
	
	@Override
	public void onSendNewSection(SendNewSectionEvent evt)
	{
		SendNewSectionAction action = evt.getAction();
		NewSectionActionTranslatorImpl newActionTranslator = new NewSectionActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SendNewSectionCallback newCallback = new SendNewSectionCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.NEW_SECTION, newCallback, json);
		request.send();
	}
	
	@Override
	public void onSendRemoveSection(SendRemoveSectionEvent evt)
	{
		SendRemoveSectionAction action = evt.getAction();
		RemoveSectionActionTranslatorImpl newActionTranslator = new RemoveSectionActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SendRemoveSectionCallback newCallback = new SendRemoveSectionCallback(eventBus);
				
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.REMOVE_SECTION, newCallback, json);
		request.send();
		//eventBusRegistration.put(SendRemoveSectionEvent.TYPE, eventBus.addHandler(SendRemoveSectionEvent.TYPE, this));		
	}
	
	@Override
	public void onSendGetSections(SendGetSectionsEvent evt)
	{
		SendGetSectionsAction action = evt.getAction();
		GetSectionsActionTranslatorImpl newActionTranslator = new GetSectionsActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SendGetSectionsCallback newCallback = new SendGetSectionsCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_ALL_SECTIONS, newCallback, json);
		request.send();
	}
	
	@Override
	public void onSendEditSection(SendEditSectionEvent evt)
	{
		SendEditSectionAction action = evt.getAction();
		EditSectionActionTranslatorImpl newActionTranslator = new EditSectionActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SendEditSectionCallback newCallback = new SendEditSectionCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.EDIT_SECTION, newCallback, json);
		request.send();
	}

}
