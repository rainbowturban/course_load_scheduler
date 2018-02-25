package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendGetFacultyAction;
import org.dselent.course_load_scheduler.client.action.SendLoginAction;
import org.dselent.course_load_scheduler.client.callback.SendLoginCallback;
import org.dselent.course_load_scheduler.client.event.SendGetFacultyEvent;
import org.dselent.course_load_scheduler.client.event.SendLoginEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.UserService;
import org.dselent.course_load_scheduler.client.translator.impl.LoginActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class HomeServiceImpl extends BaseServiceImpl implements UserService
{
	public HomeServiceImpl()
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

		registration = eventBus.addHandler(SendGetFacultyEvent.TYPE, this);
		eventBusRegistration.put(SendGetFacultyEvent.TYPE, registration);
	}

	@Override
	public void onSendGetFaculty(SendGetFacultyEvent evt)
	{
		SendGetFacultyAction action = evt.getAction();
		GetFacultyActionTranslatorImpl getFacultyActionTranslator = new GetFacultyActionTranslatorImpl();
		JSONObject json = getFacultyActionTranslator.translateToJson(action);
		SendGetFacultyCallback getFacultyCallback = new SendGetFacultyCallback(eventBus, evt.getContainer());

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_FACULTY, getFacultyCallback, json);
		request.send();
	}
}