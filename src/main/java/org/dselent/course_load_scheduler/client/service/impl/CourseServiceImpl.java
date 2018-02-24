package org.dselent.course_load_scheduler.client.service.impl;

import org.dselent.course_load_scheduler.client.action.SendGetCourseListAction;
import org.dselent.course_load_scheduler.client.action.SubmitEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitNewCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitRemoveCourseAction;
import org.dselent.course_load_scheduler.client.callback.SendGetCourseListCallback;
import org.dselent.course_load_scheduler.client.callback.SubmitEditCourseCallback;
import org.dselent.course_load_scheduler.client.callback.SubmitNewCourseCallback;
import org.dselent.course_load_scheduler.client.callback.SubmitRemoveCourseCallback;
import org.dselent.course_load_scheduler.client.event.SendGetCourseListEvent;
import org.dselent.course_load_scheduler.client.event.SubmitEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.SubmitNewCourseEvent;
import org.dselent.course_load_scheduler.client.event.SubmitRemoveCourseEvent;
import org.dselent.course_load_scheduler.client.network.NetworkRequest;
import org.dselent.course_load_scheduler.client.network.NetworkRequestStrings;
import org.dselent.course_load_scheduler.client.service.CourseService;
import org.dselent.course_load_scheduler.client.translator.impl.EditCourseActionTranslatorImpl;
import org.dselent.course_load_scheduler.client.translator.impl.GetCourseListActionTranslatorImpl;
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
		
		eventBusRegistration.put(SubmitEditCourseEvent.TYPE, eventBus.addHandler(SubmitEditCourseEvent.TYPE, this));
		eventBusRegistration.put(SubmitRemoveCourseEvent.TYPE, eventBus.addHandler(SubmitRemoveCourseEvent.TYPE, this));
		eventBusRegistration.put(SendGetCourseListEvent.TYPE, eventBus.addHandler(SendGetCourseListEvent.TYPE, this));
		
	}
	
	@Override
	public void onSubmitNewCourse(SubmitNewCourseEvent evt)
	{
		SubmitNewCourseAction action = evt.getAction();
		NewCourseActionTranslatorImpl newActionTranslator = new NewCourseActionTranslatorImpl();
		JSONObject json = newActionTranslator.translateToJson(action);
		SubmitNewCourseCallback newCallback = new SubmitNewCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.NEW_COURSE, newCallback, json);
		request.send();
	}
	
	@Override
	public void onSubmitEditCourse(SubmitEditCourseEvent evt)
	{
		SubmitEditCourseAction action = evt.getAction();
		EditCourseActionTranslatorImpl editActionTranslator = new EditCourseActionTranslatorImpl();
		JSONObject json = editActionTranslator.translateToJson(action);
		SubmitEditCourseCallback editCallback = new SubmitEditCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.EDIT_COURSE, editCallback, json);
		request.send();
	}
	
	@Override
	public void onSubmitRemoveCourse(SubmitRemoveCourseEvent evt)
	{
		SubmitRemoveCourseAction action = evt.getAction();
		RemoveCourseActionTranslatorImpl remActionTranslator = new RemoveCourseActionTranslatorImpl();
		JSONObject json = remActionTranslator.translateToJson(action);
		SubmitRemoveCourseCallback removeCallback = new SubmitRemoveCourseCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.REMOVE_COURSE, removeCallback, json);
		request.send();
	}
	
	@Override
	public void onSendGetCourseList(SendGetCourseListEvent evt)
	{
		SendGetCourseListAction action = evt.getAction();
		GetCourseListActionTranslatorImpl courseListActionTranslator = new GetCourseListActionTranslatorImpl();
		JSONObject json = courseListActionTranslator.translateToJson(action);
		SendGetCourseListCallback courseListCallback = new SendGetCourseListCallback(eventBus);
		
		NetworkRequest request = new NetworkRequest(NetworkRequestStrings.GET_COURSE_LIST, courseListCallback, json);
		request.send();
	}
	
	
}
