package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendGetStartTimesAction;
import org.dselent.course_load_scheduler.client.callback.GetStartTimesCallback;
import org.dselent.course_load_scheduler.client.event.SendGetStartTimesEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.ScheduleService;
import org.dselent.course_load_scheduler.client.translator.impl.GetStartTimesActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class ScheduleServiceImpl extends BaseServiceImpl implements ScheduleService {
	public ScheduleServiceImpl()
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
}
