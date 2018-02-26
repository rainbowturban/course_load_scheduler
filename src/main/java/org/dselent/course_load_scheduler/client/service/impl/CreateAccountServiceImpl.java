package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendCreateAccountAction;
import org.dselent.course_load_scheduler.client.callback.SendCreateAccountCallback;
import org.dselent.course_load_scheduler.client.event.SendCreateAccountEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.CreateAccountService;
import org.dselent.course_load_scheduler.client.translator.impl.CreateAccountActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class CreateAccountServiceImpl extends BaseServiceImpl implements CreateAccountService
{
	public CreateAccountServiceImpl()
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

		registration = eventBus.addHandler(SendCreateAccountEvent.TYPE, this);
		eventBusRegistration.put(SendCreateAccountEvent.TYPE, registration);
	}

	@Override
	public void onCreateAccount(SendCreateAccountEvent evt)
	{
		SendCreateAccountAction action = evt.getAction();
		CreateAccountActionTranslatorImpl createAccountActionTranslator = new CreateAccountActionTranslatorImpl();
		JSONObject json = createAccountActionTranslator.translateToJson(action);
		SendCreateAccountCallback createAccountCallback = new SendCreateAccountCallback(eventBus);

		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.CREATE_ACCOUNT, createAccountCallback, json);
		request.send();
	}
}