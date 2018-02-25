package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.GetStartTimesAction;
import org.dselent.course_load_scheduler.client.callback.GetStartTimesCallback;
import org.dselent.course_load_scheduler.client.event.GetStartTimesEvent;
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
		
		registration = eventBus.addHandler(GetStartTimesEvent.TYPE, this);
		eventBusRegistration.put(GetStartTimesEvent.TYPE, registration);
	}
	
	@Override
	public void onGetStartTimes(GetStartTimesEvent evt) {
		GetStartTimesAction action = evt.getAction();
		GetStartTimesActionTranslatorImpl createAccountActionTranslator = new GetStartTimesActionTranslatorImpl();
		JSONObject json = createAccountActionTranslator.translateToJson(action);
		GetStartTimesCallback createAccountCallback = new GetStartTimesCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_START_TIMES, createAccountCallback, json);
		request.send();
	}
}
