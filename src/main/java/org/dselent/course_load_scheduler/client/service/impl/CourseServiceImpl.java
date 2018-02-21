package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.ReceiveNewCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitNewCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitRemoveCourseAction;
import org.dselent.course_load_scheduler.client.callback.SubmitNewCourseCallback;
import org.dselent.course_load_scheduler.client.event.ReceiveNewCourseEvent;
import org.dselent.course_load_scheduler.client.event.SubmitEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.SubmitNewCourseEvent;
import org.dselent.course_load_scheduler.client.event.SubmitRemoveCourseEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.CourseService;
import org.dselent.course_load_scheduler.client.translator.impl.EditCourseActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.NewCourseActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.RemoveCourseActionTranslatorImpl;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.json.client.JSONObject;

public class CourseServiceImpl extends BaseServiceImpl implements CourseService{
	public CourseServiceImpl()
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
		
		registration = eventBus.addHandler(SubmitNewCourseEvent.TYPE, this);
		eventBusRegistration.put(SubmitNewCourseEvent.TYPE, registration);
	}
	
	@Override
	public void onSubmitNewCourse(SubmitNewCourseEvent evt)
	{
		SubmitNewCourseAction action = evt.getAction();
		NewCourseActionTranslatorImpl loginActionTranslator = new NewCourseActionTranslatorImpl();
		JSONObject json = loginActionTranslator.translateToJson(action);
		SubmitNewCourseCallback loginCallback = new SubmitNewCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.LOGIN, loginCallback, json);
		request.send();
	}
	
	@Override
	public void onSubmitEditCourse(SubmitEditCourseEvent evt)
	{
		SubmitEditCourseAction action = evt.getAction();
		EditCourseActionTranslatorImpl loginActionTranslator = new EditCourseActionTranslatorImpl();
		JSONObject json = loginActionTranslator.translateToJson(action);
		SubmitEditCourseCallback editCallback = new SubmitEditCourseCallback(eventBus);
//		
//		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.LOGIN, loginCallback, json);
//		request.send();
	}
	
	@Override
	public void onSubmitRemoveCourse(SubmitRemoveCourseEvent evt)
	{
		SubmitRemoveCourseAction action = evt.getAction();
		RemoveCourseActionTranslatorImpl loginActionTranslator = new RemoveCourseActionTranslatorImpl();
		JSONObject json = loginActionTranslator.translateToJson(action);
//		SubmitRemoveCourseCallback removeCallback = new SubmitRemoveCourseCallback(eventBus);
//		
//		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.LOGIN, loginCallback, json);
//		request.send();
	}
	
	
}
