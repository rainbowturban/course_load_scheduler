package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendEditSectionAction;
import org.dselent.course_load_scheduler.client.callback.SendEditSectionCallback;
import org.dselent.course_load_scheduler.client.event.GetSectionsEvent;
import org.dselent.course_load_scheduler.client.event.SendEditSectionEvent;
import org.dselent.course_load_scheduler.client.event.SendRemoveSectionEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.SectionService;
import org.dselent.course_load_scheduler.client.translator.impl.EditSectionActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class SectionServiceImpl extends BaseServiceImpl implements SectionService{
	public SectionServiceImpl()
	{
		
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		//Example code (old format)
		HandlerRegistration registration;
//
//		registration = eventBus.addHandler(SendLoginEvent.TYPE, this);
//		eventBusRegistration.put(SendLoginEvent.TYPE, registration);

		//bind events for Sections
		eventBusRegistration.put(SendNewSectionEvent.TYPE, eventBus.addHandler(SendNewSectionEvent.TYPE, this));
		eventBusRegistration.put(SendEditSectionEvent.TYPE, eventBus.addHandler(SendEditSectionEvent.TYPE, this));
		eventBusRegistration.put(SendRemoveSectionEvent.TYPE, eventBus.addHandler(SendRemoveSectionEvent.TYPE, this));
		
		//Unsure if I need to include these?
//		eventBusRegistration.put(GetSectionsEvent.TYPE, eventBus.addHandler(GetSectionsEvent.TYPE, this));
//		eventBusRegistration.put(ReceiveNewSectionEvent.TYPE, eventBus.addHandler(ReceiveNewSectionEvent.TYPE, this));
//		eventBusRegistration.put(ReceiveRemoveSectionEvent.TYPE, eventBus.addHandler(ReceiveRemoveSectionEvent.TYPE, this));
//		eventBusRegistration.put(ReceiveEditSectionEvent.TYPE, eventBus.addHandler(ReceiveEditSectionEvent.TYPE, this));

	}
	
	@Override
	public void onSubmitNewSection(SubmitNewSectionEvent evt)
	{
		SubmitNewSectionAction action = evt.getAction();
		NewSectionActionTranslatorImpl newActionTranslator = new NewSectionActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SubmitNewSectionCallback newCallback = new SubmitNewSectionCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.NEW_SECTION, newCallback, json);
		request.send();
	}
	
	@Override
	public void onSubmitRemoveSection(SendRemoveSectionEvent evt)
	{
		SendRemoveSectionAction action = evt.getAction();
		RemoveSectionActionTranslatorImpl newActionTranslator = new RemoveSectionActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SubmitRemoveSectionCallback newCallback = new SubmitRemoveSectionCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.REMOVE_SECTION, newCallback, json);
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
