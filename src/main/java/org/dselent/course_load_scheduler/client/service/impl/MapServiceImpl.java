package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendGetEndTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetFrequenciesAction;
import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.action.SendGetTermsAction;
import org.dselent.course_load_scheduler.client.action.SendGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.callback.GetStartTimesCallback;
import org.dselent.course_load_scheduler.client.callback.SendGetEndTimesCallback;
import org.dselent.course_load_scheduler.client.callback.SendGetFrequenciesCallback;
import org.dselent.course_load_scheduler.client.callback.SendGetTermsCallback;
import org.dselent.course_load_scheduler.client.callback.SendGetSectionTypesCallback;
import org.dselent.course_load_scheduler.client.event.SendGetEndTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;
import org.dselent.course_load_scheduler.client.event.SendGetTermsEvent;
import org.dselent.course_load_scheduler.client.event.SendGetSectionTypesEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.MapService;
import org.dselent.course_load_scheduler.client.translator.impl.GetEndTimesActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetFrequenciesActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetStartTimesActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetTermsActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetSectionTypesActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class MapServiceImpl extends BaseServiceImpl implements MapService {
	public MapServiceImpl()
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
		HandlerRegistration registration;
		
		registration = eventBus.addHandler(SendGetStartTimesEvent.TYPE, this);
		eventBusRegistration.put(SendGetStartTimesEvent.TYPE, registration);
	}
	
	@Override
	public void onGetStartTimes(SendGetStartTimesEvent evt) {
		SendGetStartTimesAction action = evt.getAction();
		GetStartTimesActionTranslatorImpl createAccountActionTranslator = new GetStartTimesActionTranslatorImpl();
		JSONObject json = createAccountActionTranslator.translateToJson(action);
		GetStartTimesCallback createAccountCallback = new GetStartTimesCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_START_TIMES, createAccountCallback, json);
		request.send();
	}
	
	@Override
	public void onGetEndTimes(SendGetEndTimesEvent evt) {
		SendGetEndTimesAction action = evt.getAction();
		GetEndTimesActionTranslatorImpl actionTranslator = new GetEndTimesActionTranslatorImpl();
		JSONObject json = actionTranslator.translateToJson(action);
		SendGetEndTimesCallback callback = new SendGetEndTimesCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_END_TIMES, callback, json);
		request.send();
	}
	
	@Override
	public void onSendGetFrequencies(SendGetFrequenciesEvent evt) {
		SendGetFrequenciesAction action = evt.getAction();
		GetFrequenciesActionTranslatorImpl actionTranslator = new GetFrequenciesActionTranslatorImpl();
		JSONObject json = actionTranslator.translateToJson(action);
		SendGetFrequenciesCallback callback = new SendGetFrequenciesCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_FREQUENCIES, callback, json);
		request.send();
	}
	
	@Override
	public void onSendGetSectionTypes(SendGetSectionTypesEvent evt) {
		SendGetSectionTypesAction action = evt.getAction();
		GetSectionTypesActionTranslatorImpl actionTranslator = new GetSectionTypesActionTranslatorImpl();
		JSONObject json = actionTranslator.translateToJson(action);
		SendGetSectionTypesCallback callback = new SendGetSectionTypesCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_SECTION_TYPES, callback, json);
		request.send();
	}
	
	@Override
	public void onSendGetTerms(SendGetTermsEvent evt) {
		SendGetTermsAction action = evt.getAction();
		GetTermsActionTranslatorImpl actionTranslator = new GetTermsActionTranslatorImpl();
		JSONObject json = actionTranslator.translateToJson(action);
		SendGetTermsCallback callback = new SendGetTermsCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_TERMS, callback, json);
		request.send();
	}
	
	

}
